"use strict"

const submit = document.querySelector('.contact-form__submit')

let firstName = document.querySelector('.contact-form__name');
let surname = document.querySelector('.contact-form__surname');
let mail = document.querySelector('.contact-form__mail');
let phone = document.querySelector('.contact-form__phone');
let www = document.querySelector('.contact-form__www');
let problem = document.querySelector('.contact-form__problem');
let captcha = document.querySelector('.contact-form__captcha');
let captchaAnswer = document.querySelector('.contact-form__captcha-answer');

const firstNameError = document.querySelector('.contact-form__name-error');
const surnameError = document.querySelector('.contact-form__surname-error');
const mailError = document.querySelector('.contact-form__mail-error');
const phoneError = document.querySelector('.contact-form__phone-error');
const wwwError = document.querySelector('.contact-form__www-error');
const problemError = document.querySelector('.contact-form__problem-error');
const captchaError = document.querySelector('.contact-form__captcha-error');

const regMail = /\w+@+[a-z]+.[a-z]{2,}/;
const regTel = /^\d{9}$/;
const regWww = /^http:\/\/+\w+.\D{2,}/;



const errors = () => {
    if (firstName.value.length < 3) {
        firstNameError.innerText = "Imię musi składać się z minimum 3 znaków";
        firstNameError.style.color = "#d11507";
    } else {
        firstNameError.innerText = '';
    }

    if (surname.value.length < 3) {
        surnameError.innerText = "Nazwisko musi składać się z minimum 3 znaków";
        surnameError.style.color = "#d11507";
    } else {
        surnameError.innerText = '';
    }

    if (!regMail.test(mail.value)) {
        mailError.innerText = "Wzór poprawnego maila: as2@gl.co";
        mailError.style.color = "#d11507";
    } else {
        mailError.innerText = '';
    }

    if (!regTel.test(phone.value)) {
        phoneError.innerText = "Podaj 9-cyfrową liczbę dodatnią";
        phoneError.style.color = "#d11507";
    } else {
        phoneError.innerText = '';
    }

    if (!regWww.test(www.value)) {
        wwwError.innerText = "Wzór poprawnego adresu url: http://blog.pl";
        wwwError.style.color = "#d11507";
    } else {
        wwwError.innerText = '';
    }

    if (problem.value.length < 50) {
        problemError.innerText = "Wiadomość musi składać się z minimum 50 znaków";
        problemError.style.color = "#d11507";
    } else {
        problemError.innerText = '';
    }
}

let a = Math.floor(Math.random() * 10 + 1);
let b = Math.floor(Math.random() * 10 + 1);
let answer;

let randomNumber = () => {
    let mathOperation = Math.floor(Math.random() * 4 + 1);


    if (mathOperation === 1) {
        answer = a + b;
        captcha.innerText = `${a} + ${b}`;
    } else if (mathOperation === 2) {
        answer = a - b;
        captcha.innerText = `${a} - ${b}`;
    } else if (mathOperation === 3) {
        answer = a * b;
        captcha.innerText = `${a} * ${b}`;
    } else if (mathOperation === 4) {
        answer = a / 2;
        captcha.innerText = `${a} / 2`
    }
    else {
        captcha.innerText='Coś poszło nie tak, odśwież stronę';
    }
}


randomNumber();

const saveSummary = () => {
    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('surname', surname.value);
    localStorage.setItem('mail', mail.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('www', www.value);
    localStorage.setItem('problem', problem.value);
}

let sendMessage = (e) => {
    errors();
    saveSummary();

    if (captchaAnswer.value == answer && firstName.value.length >= 3 && surname.value.length >= 3
        && regMail.test(mail.value) && regTel.test(phone.value) && regWww.test(www.value) && problem.value.length >= 50
    ) {
        window.open('summary.html', 'target="_blank"');
    } else {
        e.preventDefault();
        captchaError.textContent = 'Podaj poprawną odpowiedź lub/i wypełnij poprawnie formularz';
        captchaError.style.color = "#d11507";
    }
}

submit.addEventListener('click', sendMessage);