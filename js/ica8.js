// let body = document.querySelector('body');
// body.addEventListener('click',changeColor);

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function onClick(event) {
//   const box = document.getElementById('box');

//   box.style.color = 'salmon';
// });

const button = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

button.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  document.body.style.buttonColor = rndCol;
});

const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.innerText === "Red"){
        btn.innerText = "Blue";
    }else{
        btn.innerText= "Red";
    }
});