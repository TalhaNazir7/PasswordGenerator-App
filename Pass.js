const pwE1 = document.getElementById("pw");
const copyE1 = document.getElementById("copy")
const lengthE1 = document.getElementById("length");
const upperE1 = document.getElementById("upper");
const lowerE1 = document.getElementById("lower");
const numberE1 = document.getElementById("number");
const symbolsE1 = document.getElementById("symbols");
const generateE1 = document.getElementById("generate");

let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$&()"; 

function getLowercase(){
return lowerLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getUppercase(){
    return upperLetters[Math.floor(Math.random()* lowerLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() *symbols.length)];
}

function generatePassword(){
    var len=lengthE1.value;
    let password='';
    for(let i=0; i<len; i++){
        let x = generateX();
        password+=x;
    }
pwE1.value=password;
}

function generateX(){
    var xs=[];
    if(upperE1.checked){
        xs.push(getUppercase());
    }

    if(lowerE1.checked){
        xs.push(getLowercase());
    }

    if(numberE1.checked){
        xs.push(getNumber());
    }

    if(symbolsE1.checked){
        xs.push(getSymbol());
    }
    return xs[Math.floor(Math.random()*xs.length)];
}

function copyPassword(){
    pwE1.select();
    document.execCommand('copy');
    alert('Password copied to clipboard : '+pwE1.value);
}

generateE1.addEventListener('click',generatePassword);
copyE1.addEventListener('click', copyPassword);