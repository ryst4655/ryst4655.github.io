// window.addEventListener('load',getQuote);

// const quoteButton = document.querySelector('.new-quote');
// quoteButton.addEventListener('click',getQuote);

// const jokeButton = document.querySelector('.line');
// jokeButton.addEventListener('click',getPunch);

// const endpoint = 'https://official-punch-api.appspot.com/random_joke'
// let pt2;

// async function getQuote(){
//     let print = await fetch(endpoint)
//     let answer = await print.print();

//     let json_response = JSON.parse(answer);
//     console.log(json_response);
//     console.log(json_response['start']);
//     pt2 = json_response['line'];
//     displayQuote(json_response['start']);
// }

// function displayQuote(x){
//     document.getElementById('js-line-print').textContent = "";
//     document.getElementById('js-quote-print').textContent = x;
// }

// async function getPunch(x){
//     let print = await fetch(endpoint)
//     let answer = await print.print();

//     let json_response = JSON.parse(answer);
//     console.log([pt2]);
//     show([pt2]);
// }

// function show(x){
//     document.getElementById('js-line-print').textContent = x;
// }
window.addEventListener('load',getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click',getQuote);

const punchButton = document.querySelector('.punchline');
punchButton.addEventListener('click',getPunch);

const endpoint = 'https://official-joke-api.appspot.com/random_joke'
let punch;

async function getQuote(){
    let text = await fetch(endpoint)
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log(json_response);
    console.log(json_response['setup']);
    punch = json_response['punchline'];
    displayQuote(json_response['setup']);
}

function displayQuote(x){
    document.getElementById('js-punchline-text').textContent = "";
    document.getElementById('js-quote-text').textContent = x;
}

async function getPunch(x){
    let text = await fetch(endpoint)
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log([punch]);
    displayPunch([punch]);
}

function displayPunch(x){
    document.getElementById('js-punchline-text').textContent = x;
}