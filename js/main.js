// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
  {
    title: "Project name",
    description: "One or two sentences on what it is and what you used.",
    live: "https://example.com",
    repo: "https://github.com/aidenfranko/project-name"
  },
  {
    title: "Second project",
    description: "Another short description.",
    live: "https://example.com",
    repo: "https://github.com/aidenfranko/second-project"
  }
];

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const links = document.createElement("div");
  links.className = "project-links";

  const live = document.createElement("a");
  live.href = project.live;
  live.textContent = "Live site";
  live.target = "_blank";
  live.rel = "noopener noreferrer";

  const repo = document.createElement("a");
  repo.href = project.repo;
  repo.textContent = "Source code";
  repo.target = "_blank";
  repo.rel = "noopener noreferrer";

  links.append(live, repo);
  card.append(title, description, links);
  return card;
}

function renderProjects(list) {
  const container = document.getElementById("project-list");
  container.replaceChildren(...list.map(createProjectCard));
}

renderProjects(projects);