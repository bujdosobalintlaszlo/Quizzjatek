const username = document.querySelector('#username')
const savescorebtn = document.querySelector('#savescorebtn')
const finalscore = document.querySelector('#vegeredmeny')
const mostRecentScore = localStorage.getItem('mostRecentScore')


const highscores = JSON.parse(localStorage.getItem('highScores')) || []

const max_highscores = 5


finalscore.innerHTML = mostRecentScore

username.addEventListener('keyup',() => 
{
    savescorebtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highscores.push(score);

    highscores.sort((a, b) => {
        return b.score - a.score; // Javítás: itt a - operátort kell használni
    });

    highscores.splice(max_highscores); // Javítás: a maximális rekordok számát használd
    console.log(highscores);
    localStorage.setItem('highScores', JSON.stringify(highscores));
    window.location.assign('alap.html');
};
console.log(mostRecentScore);
