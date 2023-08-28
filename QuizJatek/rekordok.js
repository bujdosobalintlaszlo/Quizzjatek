const highscoreslist = document.querySelector('#highscoreslist')
const highscores = JSON.parse(localStorage.getItem('highScores')) || []

highscoreslist.innerHTML = highscores.map(score=>
    {
      console.log(score.score)
       return `<h1 class="high_score">${score.name} - ${score.score}</h1>`;

    }).join('')