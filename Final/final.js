var wordsection = document.querySelector(".wordsection");
var lettersection = document.querySelector(".lettersection");
document.getElementById("game-over").addEventListener("click", ()=>{ window.location.reload()  })
document.getElementById("won").addEventListener("click", ()=>{ window.location.reload()  })
const greenGood = `rgb(${0}, ${255}, ${0})`;
const redBad = `rgb(${255}, ${0}, ${0})`;
var falseCount = 0;
var filledCount = 0;

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

let alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

alphabetArray.map((letter)=>{
    let node = document.createElement("span")
    node.setAttribute("class", "alphabet")
    node.setAttribute("id", letter)
    let letterNode = document.createTextNode(letter)
    node.appendChild(letterNode)
 lettersection.appendChild(node)
})



 fetch("https://random-words-api.vercel.app/word") 
 .then(response=> {return response.json()})
 .then(data => {const received = data[0].word;
    const word = received.toLowerCase();
game(word);
})
.catch(error => wordsection.innerHTML = "Failed to load word. Please refresh")



function game(fetchword){
    const wordarray = fetchword.split("");
    const wordlength = wordarray.length;
    console.log(wordlength)
    for(let i=0; i<wordlength; i++){
let wordnode = document.createElement("span");
wordnode.setAttribute("class", "wordletter")
wordnode.setAttribute("id", i)
let text = document.createTextNode("");
wordnode.appendChild(text);
wordsection.appendChild(wordnode)
}

document.querySelectorAll(".alphabet").forEach(each=> {each.addEventListener('click', selectLetter)});


function selectLetter(event){
let selectedLetter = event.target.innerText;
let letterStatus = wordarray.includes(selectedLetter);
document.getElementById(selectedLetter).classList.add("bg");
    if(letterStatus){
    var indexes = [];
    for(let i = 0; i < wordarray.length; i++){
        if (wordarray[i] === selectedLetter)
            indexes.push(i);
            document.body.style.backgroundColor = greenGood;
        }
     for(let j=0; j<indexes.length; j++){
         document.getElementById(indexes[j]).innerText = wordarray[indexes[j]];
     }

     filledCount = filledCount + indexes.length;
     if(filledCount===wordarray.length){
         document.querySelectorAll(".alphabet").forEach(each=> {each.removeEventListener('click', selectLetter)});
         document.querySelector(".win").classList.add("viewwin")
     }
   }
else {
falseCount++;
console.log(falseCount)
document.body.style.backgroundColor = redBad;
if(falseCount===7){
   
    document.querySelectorAll(".alphabet").forEach(each=> {each.removeEventListener('click', selectLetter)});
    document.querySelector(".gameover").classList.add("viewgameover");
    document.getElementById("correctword").innerText = `The correct word was: ${fetchword}`;
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;

}
}
document.getElementById("chancesleft").innerText =  7-falseCount;
   
 }

}

