const buttons = document.querySelectorAll('.toggle-details');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;

    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block';
      button.textContent = 'Hide Details';
    } else {
      details.style.display = 'none';
      button.textContent = 'Show Details';
    }
  });
});
const form = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message || !email.includes('@')) {
    event.preventDefault();
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please fill out all fields correctly.';
  } else {
    errorMessage.style.display = 'none';
  }
});

const projectsSection = document.getElementById("project-list");

const GITHUB_API_URL = "https://api.github.com/users/Nasli-Ayoub/repos";

fetch(GITHUB_API_URL)
  .then((response) => response.json())
  .then((repos) => {
    const selectedRepos = [
    {
      name: "interactive-quiz",
      image: "images/quiz-preview.png",
      name: "registration-form",
      image: "images/registration-form-preview.png",
      name: "storage-assignment",
      image: "images/storage-api-demo-preview.png",
    }
    ];

    const filteredRepos = repos.filter((repo) =>
      selectedRepos.includes(repo.name.toLowerCase())
    );

    filteredRepos.forEach((repo) => {
      const projectCard = document.createElement("div");
      projectCard.className = "project";

      projectCard.innerHTML = `
        <h3>${repo.name}</h3>
        <img src="${selectedRepo.image}" alt="${repo.name} Preview" loading="lazy">
        <button class="toggle-details">Show Details</button>
        <div class="details" style="display: none;">
          <p>${repo.description || "No description available."}</p>
          <a href="${repo.html_url}" target="_blank">View Repository</a>
        </div>
      `;

      projectsSection.appendChild(projectCard);
    });

    const toggleButtons = document.querySelectorAll(".toggle-details");
    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const details = button.nextElementSibling;
        if (details.style.display === "none") {
          details.style.display = "block";
          button.textContent = "Hide Details";
        } else {
          details.style.display = "none";
          button.textContent = "Show Details";
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
    projectsSection.innerHTML = "<p>Unable to load projects.</p>";
  });