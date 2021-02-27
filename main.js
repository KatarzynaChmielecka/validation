"use strict"

const h3 = document.querySelector('.contact-form__title');
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

const sendMessage = () => {
    if (firstName.value.length < 3) {
        firstNameError.innerText = "Imię musi składać się z minimum 3 znaków"
    } else {
        firstNameError.innerText = '';
    }

    if (surname.value.length < 3) {
        surnameError.innerText = "Nazwisko musi składać się z minimum 3 znaków";
    } else {
        surnameError.innerText = '';
    }

    if (!regMail.test(mail.value)) {
        mailError.innerText = "Wzór poprawnego maila: as2@gl.co"
    } else {
        mailError.innerText = '';
    }

    if (!regTel.test(phone.value)) {
        phoneError.innerText = "Podaj 9-cyfrową liczbę dodatnią"
    } else {
        phoneError.innerText = '';
    }

    if (!regWww.test(www.value)) {
        wwwError.innerText = "Wzór poprawnego adresu url: http://blog.pl"
    } else {
        wwwError.innerText = '';
    }

    if (problem.value.length < 50) {
        problemError.innerText = "Wiadomość musi składać się z minimum 50 znaków"
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
        console.log('Podaj wynik dodawania')
        console.log(a)
        console.log(b)
        console.log(a + b)

        answer = a + b;
        captcha.innerText = `${a} + ${b}`;

    } else if (mathOperation === 2) {
        console.log('Podaj wynik odejmowania')
        console.log(a)
        console.log(b)
        console.log(a - b);

        answer = a - b;
        captcha.innerText = `${a} - ${b}`;
    } else if (mathOperation === 3) {
        console.log('Podaj wynik mnożenia');
        console.log(a)
        console.log(b)
        console.log(a * b)

        answer = a * b;
        captcha.innerText = `${a} * ${b}`;
    } else if (mathOperation === 4) {
        console.log('Podaj wynik dzielenia');
        console.log(a)
        console.log(2)
        console.log(a / 2)

        answer = a / 2;
        captcha.innerText = `${a} / 2`
    }
    else {
        console.log('Coś poszło nie tak, odśwież stronę');
    }
}




randomNumber()

let captchaFunction = (e) => {
    sendMessage()

    if (captchaAnswer.value == answer && firstName.value.length >= 3 && surname.value.length >= 3
        && regMail.test(mail.value) && regTel.test(phone.value) && regWww.test(www.value) && problem.value.length >= 50
    ) {
        console.log('brawo, dobry wynik')
        window.open('summary.html', 'target="_blank"', 'summary')
    } else {
        console.log('podaj poprawną odpowiedź lub/i wypełnij poprawnie formularz');

        e.preventDefault()

    }

}



// captchaFunction()
// submit.addEventListener('click', sendMessage);

// submit.addEventListener('click', captchaFunction);

submit.addEventListener('click', captchaFunction);


