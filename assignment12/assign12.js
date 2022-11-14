//random button
function random1(){
    outputNum1 = randomNumber(100,999);
    output1.textContent = outputNum1;
    var string1 = outputNum1.toString();
    var length1 = string1.length;
    if (length1 === 2){
        string1 = '0' + string1;
    }
    if (length1 === 1){
        string1 = '00' + string1;
    }
    output1.textContent=string1;

}

function random2(){
    outputNum2 = randomNumber(0,999);
    output2.textContent = outputNum2;
    var string2 = outputNum2.toString();
    var length2 = string2.length;
    if (length2 === 2){
        string2 = '0' + string2;
    }
    if (length2 === 1){
        string2 = '00' + string2;
    }
    output2.textContent=string2;

}

function random3(){
    outputNum3 = randomNumber(0,9999);
    output3.textContent = outputNum3;
    var string3 = outputNum3.toString();
    var length3 = string3.length;
    if (length3 === 3){
        string3 = '0' + string3;
    }
    if (length3 === 2){
        string3 = string3 + '00';
    }
    if (length3 === 1){
        string3 = '000' + string3;
    }
    output3.textContent=string3; 
}


function randomNumber(min,max){
    const num = Math.floor(Math.random() * (max-min + 1)) + min;
    return num;
}

function reset1(){
    outputNum1 = 00000;
    output1.textContent = outputNum1;
}

function reset2(){
    outputNum2 = 00000;
    output2.textContent = outputNum2;
}

function reset3(){
    outputNum3 = 000000;
    output3.textContent = outputNum3;
}


function submit(){
    alert(output1.textContent + output2.textContent + output3.textContent);
}

const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');
let outputNum1 = parseInt(output1.textContent);
let outputNum2 = parseInt(output2.textContent);
let outputNum3 = parseInt(output3.textContent);
const resetButton1 = document.querySelector('.reset-button1').addEventListener('click',reset1);
const randomButton1 = document.querySelector('.random-button1').addEventListener('click',random1);
const resetButton2 = document.querySelector('.reset-button2').addEventListener('click',reset2);
const randomButton2 = document.querySelector('.random-button2').addEventListener('click',random2);
const resetButton3 = document.querySelector('.reset-button3').addEventListener('click',reset3);
const randomButton3 = document.querySelector('.random-button3').addEventListener('click',random3);
const submitButton = document.querySelector('.submit-button').addEventListener('click',submit);