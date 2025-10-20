//js fetch API to get the app ideas from a json file

// //do a doc ready f\/n

fetch('https://barrycumbie.github.io/redesigned-giggle-fetchAPI/appIdeas.json').then(response => response.json())
    .then(data => {

        // console.log(data.projects[3].name);
        const appIdeasList = document.getElementById('appIdeas');
        appIdeasList.innerHTML = ''; // Clear existing list items
        data.projects.forEach(idea => {
            console.log(idea);
            const listItem = document.createElement('li');
            listItem.textContent = `${idea.name}, ${idea.description}`;
            appIdeasList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching app ideas:', error));



let fetchedCards;

fetchedCards =   `
<!-- These are my three projects.-->
<div class="col-md-3 mb-3 project">
<img src="../images/GameSnippet.png" alt="Matching Game" />
<h2>Matching Game from scropt </h2>
<p>
For this project, I created a simple matching game using HTML, CSS, and JavaScript. The game involves matching
emojis to the description provided.
</p>
<!-- This links to my Project Bravo, also target="_blank" opens in a new tab. -->
<a href="https://alex-copeland-5.github.io/project-bravo/" target="_blank">Play Game</a>
<a href="https://github.com/Alex-Copeland-5/project-bravo" target="_blank">View Source Code</a>
</div>
`
fetchedCards += '<h3>mroe hhttmm</h3> '

    document.getElementById('gameHouse').append(fetchedCards); 