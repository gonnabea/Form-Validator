const body = document.querySelector("body");
const formSubmit = document.getElementById("formSubmit");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const nameContainer = document.getElementById("nameContainer");
const nameMsg = document.getElementById("nameMsg");
const emailMsg = document.getElementById("emailMsg");
const passwordMsg = document.getElementById("passwordMsg");
const passwordMsg2 = document.getElementById("passwordMsg2");


function handleSubmit(e){
    e.preventDefault();
    console.log(e);
    checkUsername(username.value);
    emailValidation(email.value);
    checkPassword(password.value);
    confirmPassword();
    
}

function checkUsername(name){
    if(name.length < 3){
        username.style.border = "solid 2px red";
        nameMsg.innerHTML="Username must be at least 3 characters";
        username.style.outline = "none";
    }else{
        username.style.border = "solid 2px #2ECC71";
        nameMsg.innerHTML = "";
        username.style.outline = "none";
    }
}

function emailValidation(email){
    const atSign = /@/;
    console.log(email.match(atSign))
}

function checkPassword(passwordArg){
    if(passwordArg.length < 6){
        password.style.border = "solid 2px red";
        passwordMsg.innerHTML = "Password should be at least 6 characters";
        password.style.outline = "none";
    }else{
        password.style.border = "solid 2px #2ECC71";
        passwordMsg.innerHTML = "";
        password.style.outline = "none";
    }
}

function confirmPassword(){
    console.log(password.value);
    console.log(password2.value)
    if(password.value !== password2.value){
        password2.style.border = "solid 2px red";
        passwordMsg2.innerHTML = "Passwords do not match";
        password2.style.outline = "none";
    }else{
        password2.style.border = "solid 2px #2ECC71";
        passwordMsg2.innerHTML = "";
        password2.style.outline = "none";
    }
}

function init(){
    formSubmit.addEventListener("submit", handleSubmit);
}

init();