let input=document.getElementById('input-field')
let copy=document.getElementById('copy-btn')
let generate=document.getElementById('generate-btn')
const length=12

let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let smallCase="abcdefghijklmnopqrstuvwxyz"
let numbers="0123456789"
let symbols="!@#$%^&*()_-{}[]:;<>?/|="
const allChars=upperCase+smallCase+numbers+symbols

function random(){
    let password=""
    password+=upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=smallCase[Math.floor(Math.random()*smallCase.length)]
    password+=numbers[Math.floor(Math.random()*numbers.length)]
    password+=symbols[Math.floor(Math.random()*symbols.length)]

    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)]
    }

    input.value=password
}

function copypassword(){
    input.select();
    document.execCommand("copy");
}

generate.addEventListener('click',()=>{
    random();
})

copy.addEventListener('click',()=>{
    copypassword();
})