
fetch("appIdeas.json")
  .then((response) => response.json())
  .then((data) => {
    const appIdeasDiv = document.getElementById("appIdeas");
    let html = "";
    data.projects.forEach((project) => {
      html += `
        <div class="card">
          <h3>${project.name}</h3>
          ${project.img ? `<img src="${project.img}" alt="${project.name}" ` : ""}
          <p><a href="${project.app}" target="_blank">Live App</a></p>
          <p><a href="${project.repo}" target="_blank">Source Code</a></p>
        </div>
      `;
    });
    appIdeasDiv.innerHTML = html;
  })
  .catch((error) => console.error("Error loading JSON:", error));
