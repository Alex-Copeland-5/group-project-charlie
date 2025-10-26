fetch("appIdeas.json")
  .then((response) => response.json())
  .then((data) => {
    const appIdeasDiv = document.getElementById("appIdeas");
    let html = "";

    data.projects.forEach((project) => {
      // If an image exists, display it; otherwise use a placeholder div
      const imgHTML = project.img
        ? `<img src="${project.img}" alt="${project.name} preview" loading="lazy">`
        : `<div class="img-placeholder" aria-hidden="true"></div>`;

      // Each project is wrapped in an <article> tag for better semantics
      html += `
        <article class="app-card">
          <h3 class="app-title">${project.name}</h3>
          ${imgHTML}
          <div class="app-links mt-2">
            <a href="${project.app}" target="_blank" rel="noopener">Live App</a>
            <a href="${project.repo}" target="_blank" rel="noopener">Source Code</a>
          </div>
        </article>
      `;
    });

    appIdeasDiv.innerHTML = html;
  })
  .catch((error) => console.error("Error loading JSON:", error));