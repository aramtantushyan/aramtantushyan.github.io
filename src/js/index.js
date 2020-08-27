import {redirectToOtherPage} from './helpers/redirect.helper.js'

const eyeIcon = document.querySelector('.ion-icon__eye');
const username = document.getElementById('1');
const password = document.getElementById('2');
const errorText1 = document.querySelector('.error1');
const loginBlock = document.querySelector('.main-body__login');
const loginText = document.querySelector('.main-body__login_btn');

function showHidePassword () {
    if (password.type === "password") {
        password.type = "text";
        eyeIcon.name = 'eye-off-outline';
      } else {
        password.type = "password";
        eyeIcon.name = 'eye-outline';
      }
}

function validateInput (target) {
    const inputValue = target.value;
    const targetId = target.id;
    const check = document.querySelector(`.ion-icon${targetId}_check`); 
    const close = document.querySelector(`.ion-icon${targetId}_close`);
    const errorText = document.querySelector(`.error${targetId}`);
    if (inputValue.trim().length < 5) {
        close.classList.add('visible');
        check.classList.remove('visible');
        errorText.classList.add('visible');
        return false;
    } else {
        check.classList.add('visible');
        close.classList.remove('visible');
        errorText.classList.remove('visible');
        return true;
    }
}

function validateUsernamePassword () {
    /**
     Fn calls are assigned to variables in order to run the func.
     for both inputs to make appropriate UI changes.
     */ 
    const usernameResult = validateInput(username);
    const passwordResult = validateInput(password); 
    return (usernameResult && passwordResult);
}

function navigateToNextPage () {
    if(validateUsernamePassword()) {
        redirectToOtherPage('src/pages/countries.html');
    }
}

username.addEventListener('keyup', (e) => {
    if(e.key !== 'Enter') {
        validateInput(e.target);
    } else {
        navigateToNextPage();
    }
});

password.addEventListener('keyup', (e) => {
    if(e.key !== 'Enter') {
        validateInput(e.target);
    } else {
        navigateToNextPage();
    }
});

username.addEventListener('blur', (e) => {validateInput(e.target)});
password.addEventListener('blur', (e) => {validateInput(e.target)});

loginText.addEventListener('click', navigateToNextPage);
eyeIcon.addEventListener('click', showHidePassword);