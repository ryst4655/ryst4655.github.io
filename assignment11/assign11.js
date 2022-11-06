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