function loadPage(page) {
  const maincontent = document.getElementById("maincontent");
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${page}`) {
      link.classList.add("active");
    }
  });
  maincontent.scrollTo(0, 0);
  let content = "";
  switch (page) {
    case "about":
      content = `<div class="page-content about-page" data-aos="fade-up"><h1 class="greeting">Hello, I'm</h1><h2 class="name-title">Kim Verlie Vivas <span class="highlight">Napolitano</span></h2><div class="about-text"><p>A passionate Information Technology student at Polytechnic University of the Philippines, currently exploring the world of web development and digital innovation.</p><p>I'm dedicated to learning and applying modern technologies to create meaningful digital experiences.</p><p>I believe in continuous growth and enjoy the process of transforming ideas into functional, user-friendly applications.</p></div><div class="action-buttons"><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#resumeModal"><i class="fas fa-file-alt me-2"></i>View Resume</button><a href="#projects" class="btn btn-outline" onclick="loadPage('projects'); return false;"><i class="fas fa-code me-2"></i>Explore Projects</a></div></div>`;
      break;
    case "projects":
      content = `<div class="page-content projects-page" data-aos="fade-up"><h2 class="section-title">My <span class="highlight">Projects</span></h2><p class="section-description">Here are some of the projects I've built to apply my learning and showcase my skills in web development.</p><div class="projects-grid" id="projects-container"></div></div>`;
      setTimeout(() => {
        loadProjects();
      }, 100);
      break;
    case "skills":
      content = `<div class="page-content skills-page" data-aos="fade-up"><h2 class="section-title">Technical <span class="highlight">Skills</span></h2><p class="section-description">The technologies and tools I work with to bring ideas to life.</p><div class="skills-grid"><div class="skill-category"><h3><i class="fas fa-code skill-icon"></i>Frontend Development</h3><div class="skill-items"><span class="skill-item">HTML</span><span class="skill-item">CSS</span><span class="skill-item">JavaScript</span><span class="skill-item">Bootstrap</span></div></div><div class="skill-category"><h3><i class="fas fa-tools skill-icon"></i>Tools & Platforms</h3><div class="skill-items"><span class="skill-item">Git & GitHub</span><span class="skill-item">VS Code</span><span class="skill-item">Chrome DevTools</span></div></div></div></div>`;
      break;
  }
  maincontent.innerHTML = content;
  AOS.refresh();
}
function loadProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = "";
  siteData.portfolio.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.setAttribute("data-aos", "fade-up");
    projectCard.setAttribute("data-aos-delay", (index * 100).toString());
    projectCard.innerHTML = `<div class="project-image"><img src="${
      project.image
    }" alt="${
      project.title
    }" class="img-fluid" onerror="this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22><rect width=%22300%22 height=%22200%22 fill=%22%23f0e6d6%22/><text x=%22150%22 y=%22100%22 font-family=%22Arial%22 font-size=%2216%22 text-anchor=%22middle%22 fill=%22%235a5343%22>${
      project.title
    }</text></svg>'"></div><div class="project-content"><h4 class="project-title">${
      project.title
    }</h4><p class="project-description">${
      project.description
    }</p><div class="project-buttons">${
      project.viewLink
        ? `<a href="${project.viewLink}" target="_blank" class="btn btn-primary btn-sm">View Demo</a>`
        : ""
    }${
      project.docLink
        ? `<a href="${project.docLink}" target="_blank" class="btn btn-outline btn-sm">View Code</a>`
        : '<button class="btn btn-outline btn-sm" disabled>Private Code</button>'
    }</div></div>`;
    container.appendChild(projectCard);
  });
}
