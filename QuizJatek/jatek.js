
const question = document.querySelector('#kerdes');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progresstext = document.querySelector('#progress');
const scoretext = document.querySelector('#score');
const progressbarfull = document.querySelector('#progressbarfull');

let currentquestion = {};
let acceptanswer = true;
let score = 0;
let questioncounter = 0;
let availablequestions = [];


let questions = [
    {
        question:'Mi a JavaScript?',
        choice1:'Egy adatbázis-kezelő rendszer',
        choice2:'Egy szerveroldali programozási nyelv',
        choice3:'Egy böngésző alapú programozási nyelv',
        choice4:'Egy operációs rendszer',
        answer:3,
    },
    {
        question:'Melyik kulcsszót használjuk a változó deklarálásához a JavaScriptben?',
        choice1:'var',
        choice2:'let',
        choice3:'const',
        choice4:'variable',
        answer:2,
    },
    {
        question:'Mi a DOM rövidítése a JavaScriptben?',
        choice1:'Document Object Model',
        choice2:'Display Order Method',
        choice3:'Dynamic Operation Module',
        choice4:'Data Oriented Model',
        answer:1,
    },
    {
        question:'Melyik függvényt használjuk az elem kiválasztásához a DOM-ban?',
        choice1:'selectElement()',
        choice2:'getElementById()',
        choice3:'chooseElement()',
        choice4:'findElement()',
        answer:2,
    },
    {
        question:'Melyik ciklust használhatjuk az elemek bejárásához egy tömbben JavaScriptben?',
        choice1:'loop',
        choice2:'for-in ciklus',
        choice3:'foreach ciklus',
        choice4:'for ciklus',
        answer:4,
    },
    {
        question:'Melyik eseményt váltja ki, amikor egy HTML elem felett elhúzzuk az egeret?',
        choice1:'click',
        choice2:'hover',
        choice3:'mouseover',
        choice4:'move',
        answer:3,
    },
    {
        question:'Hogyan lehet külső JavaScript fájlt csatolni egy HTML dokumentumba?',
        choice1:'<js src="script.js">',
        choice2:'<script type="javascript" src="script.js">',
        choice3:'<script src="script.js"></script>',
        choice4:'<javascript src="script.js"></javascript>',
        answer:3,
    },
    {
        question:'Melyik metódust használjuk a karakterlánc hosszának meghatározásához JavaScriptben?',
        choice1:'.lengthOf()',
        choice2:'.size()',
        choice3:'.length()',
        choice4:'.count()',
        answer:3,
    },
    {
        question:'Mi a callback-függvény a JavaScriptben?',
        choice1:'Egy függvény, amely a program elindításakor mindig lefut',
        choice2:'Egy függvény, amely azonnal visszatér az eredménnyel',
        choice3:'Egy függvény, amely egy másik függvény argumentumaként kerül átadásra és később hívódik meg',
        choice4:'Egy függvény, amely hozzáférést biztosít a böngésző belső API-jaihoz',
        answer:3,
    },
    {
        question:'Hogyan lehet hibakezelést végezni JavaScriptben?',
        choice1:'try/except blokkokkal',
        choice2:'if/else utasításokkal',
        choice3:'catch/throw struktúrákkal',
        choice4:'error() függvény meghívásával',
        answer:1,
    },
    {
        question: 'Mi a prototípus lánc a JavaScriptben?',
        choice1: 'Egy módszer a funkcionalitás öröklésére az osztályok között',
        choice2: 'Egy láncolat a JavaScript függvénykönyvtárhoz',
        choice3: 'Az objektumok és prototípusuk közötti kapcsolat',
        choice4: 'Egy sor az egymásba ágyazott for ciklusokhoz',
        answer: 3
    },
    {
        question: 'Mi a megkötött (strict) üzemmód a JavaScriptben?',
        choice1: 'Egy mód, amely megköveteli a vázlatosan leírt dokumentáció használatát',
        choice2: 'Egy mód, amely a nyelv bizonyos hibás viselkedését javítja',
        choice3: 'Egy mód, amely kötelezővé teszi a függvények paramétereinek típusmegadását',
        choice4: 'Egy mód, amely elősegíti a könnyen olvasható kódot',
        answer: 2
    },
    {
        question: 'Mi a currying a JavaScriptben?',
        choice1: 'Egy módszer a függvények hívásának késleltetésére',
        choice2: 'Egy technika, amelyben a függvények több visszatérési értéket adnak',
        choice3: 'Egy folyamat, amely során a függvényeket fokozatosan finomhangoljuk és specializáljuk',
        choice4: 'Egy technika a hibák elkapására és kezelésére',
        answer: 3
    },
    {
        question: 'Mi az a WebSockets a JavaScriptben?',
        choice1: 'Egy API a böngésző megjelenésének testreszabásához',
        choice2: 'Egy interfész a böngészőhöz kapcsolódó hardver eszközökhöz',
        choice3: 'Egy technika az oldalak offline elérhetőségének biztosítására',
        choice4: 'Egy kommunikációs protokoll kétirányú kommunikációhoz a böngésző és a szerver között',
        answer: 4
    },
    {
        question: 'Melyik ES6 (ECMAScript 2015) jellemző biztosítja az osztályokat a JavaScriptben?',
        choice1: 'classOf',
        choice2: 'newClass',
        choice3: 'createClass',
        choice4: 'class',
        answer: 4
    },
    {
        question: 'Mi a memória szivárgás a JavaScriptben és hogyan előzhető meg?',
        choice1: 'Amikor túl sok memóriát használunk el a böngészőben, és a program lelassul',
        choice2: 'Amikor egy változó értéke nem változik meg a program futása során',
        choice3: 'Amikor a függvények aszinkron módon hibát okoznak a programban',
        choice4: 'Amikor a nem használt memóriaterület nem szabadul fel, és ez túlzott memóriahasználathoz vezethet',
        answer: 4
    },
    {
        question: 'Melyik módosítóval tudunk privát adattagokat létrehozni egy osztályban JavaScriptben?',
        choice1: 'private',
        choice2: 'priv',
        choice3: 'let',
        choice4: 'underscore',
        answer: 1
    },
    {
        question: 'Mi a currying a JavaScriptben?',
        choice1: 'Egy módosító, amely szabályozza a változók hozzáférhetőségét',
        choice2: 'Egy technika a kódolási hibák kijavítására',
        choice3: 'Egy folyamat, amely során az adatokat különböző rétegekre bontjuk',
        choice4: 'Egy technika, amely lehetővé teszi egy függvény részleges alkalmazását',
        answer: 4
    },
    {
        question: 'Mi az a JavaScript modulrendszer?',
        choice1: 'Egy felhasználói felület tervezési elv',
        choice2: 'Egy alkalmazásfejlesztési keretrendszer',
        choice3: 'Egy technika a weboldalak teljesítményének mérésére',
        choice4: 'Egy módszer a kódbázis szervezésére és osztályok importálására/exportálására',
        answer: 4
    },
    {
        question: 'Mi a JavaScript aszinkron programozás?',
        choice1: 'Egy módszer a kód minőségének javítására és olvashatóságának növelésére',
        choice2: 'Egy technika, amely a függvények szinkron működését biztosítja',
        choice3: 'Egy módszer a számításigényes feladatok gyorsítására',
        choice4: 'Egy módszer a kódban olyan műveletek kezelésére, amelyek nem blokkolják a fő szál futását',
        answer: 4
    }
    
];

const score_points = 10;
const max_questions = 20;


startGame = () => {
    questioncounter = 0;
    score = 0;
    availablequestions = [...questions];
    getNewQuestions();
};

getNewQuestions = () => {
    if (availablequestions.length === 0 || questioncounter >= max_questions) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/vege.html');
    }
    questioncounter++;
    progresstext.innerText = `Kérdés ${questioncounter} of ${max_questions}`;
    progressbarfull.style.width = `${(questioncounter / max_questions) * 100}%`;

    const questionsindex = Math.floor(Math.random() * availablequestions.length);
    currentquestion = availablequestions[questionsindex];
    question.innerText = currentquestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentquestion['choice' + number];
    });
    availablequestions.splice(questionsindex, 1);

    acceptanswer = true;
};

choices.forEach(choice =>
    {
        choice.addEventListener('click', e =>
        {
            if(!acceptanswer) 
            return acceptanswer = false
            const selectedchoice = e.target;
            const selectedanswer = selectedchoice.dataset['number'];

            let classtoapply = selectedanswer == currentquestion.answer ? 'correct' : 'incorrect'


            if(classtoapply === 'correct')
            {
                incrementScore(score_points)
                
            }

            selectedchoice.parentElement.classList.add(classtoapply)

            setTimeout(() =>
            {
                selectedchoice.parentElement.classList.remove(classtoapply)
                getNewQuestions()
            },100)

        })
    })

incrementScore = num =>
{
    score += num
    scoretext.innerText = score
}

startGame();