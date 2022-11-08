window.addEventListener('load',getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click',getQuote);

const punchButton = document.querySelector('.line');
punchButton.addEventListener('click',getJoke);

const endpoint = 'https://official-joke-api.appspot.com/random_joke'
let pt2;

async function getQuote(){
    let text = await fetch(endpoint)
    let answer = await text.text();

    let json_response = JSON.parse(answer);
    console.log(json_response);
    console.log(json_response['start']);
    pt2 = json_response['line'];
    displayQuote(json_response['start']);
}

function displayQuote(y){
    document.getElementById('js-line-text').textContent = "";
    document.getElementById('js-quote-text').textContent = y;
}

async function getJoke(y){
    let text = await fetch(endpoint)
    let answer = await text.text();

    let json_response = JSON.parse(answer);
    console.log([pt2]);
    show([pt2]);
}

function show(y){
    document.getElementById('js-line-text').textContent = y;
}