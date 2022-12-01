'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

// Selectors
const title = select('.title');
const start = select('.start');

const word = select('.word');
const input = select('.input');

// Class
class Score {
    #date;
    #hits;
    #percentage;

    constructor(date, hits, percentage) {
        this.#date = date;
        this.#hits = hits;
        this.#percentage = percentage;
    }

    get date() {
        // Generates names instead of numbers
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];

        // New date
        const date = new Date();

        // Day and Year
        const day = date.getDate();
        const year = date.getFullYear();

        this.#date = `${monthNames[date.getMonth()]} ${day}, ${year}`;
        return this.#date;
    }

    get hits() {
        
        return this.#hits;
    }

    get percentage() {
        return this.#percentage;
    }


}

const wordList = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population',
'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute',
'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle',
'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy',
'database', 'periodic', 'capitalism', 'abominable', 'component', 'future',
'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency',
'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician',
'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution',
'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music',
'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button',
'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework',
'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery',
'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow',
'keyboard', 'window'];

function dateTime() {
    // Generates names instead of numbers
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    // New date
    const date = new Date();

    // Day and Year
    const day = date.getDate();
    const year = date.getFullYear();

    let newDate = `${monthNames[date.getMonth()]} ${day}, ${year}`;
    return newDate;
}

let score = 0;
let hits = 0;

onEvent('click', start, function() {
    title.style.display = 'none';
    start.style.display = 'none';
    input.style.display = 'initial';

    gameWord();
});

function gameWord() {
    let wordNum = Math.floor(Math.random() * 100);
    let wordGuess = wordList[wordNum];

    word.innerText = wordGuess;
}

// Checks if word is written out
input.onkeyup = function() {
    if(input.value === word.innerText) {
        score++;
        gameWord();
        input.value = '';

        // Clears the input, adds 1 point and sets a new word
    }
}

