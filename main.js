const h3 = document.querySelector('.contact-form__title');
const submit = document.querySelector('.contact-form__submit')

const firstName = document.querySelector('.contact-form__name');
const surname = document.querySelector('.contact-form__surname');
const mail = document.querySelector('.contact-form__mail');
const phone = document.querySelector('.contact-form__phone');
const www = document.querySelector('.contact-form__www');
const problem = document.querySelector('.contact-form__problem');
let captcha = document.querySelector('.contact-form__captcha');
const captchaAnswer = document.querySelector('.contact-form__captcha-answer');

const firstNameError = document.querySelector('.contact-form__name-error');
const surnameError = document.querySelector('.contact-form__surname-error');
const mailError = document.querySelector('.contact-form__mail-error');
const phoneError = document.querySelector('.contact-form__phone-error');
const wwwError = document.querySelector('.contact-form__www-error');
const problemError = document.querySelector('.contact-form__problem-error');
const captchaError = document.querySelector('.contact-form__captcha-error');

const regMail = /\w+@+[a-z]+.[a-z]{2,}/;
const regTel = /^\d{9,9}/;
const regWww = /^http:\/\/+\w+.\D{2,}/;

const sendMessage = () => {
    if (firstName.value.length < 3) {
        // submit.setAttribute("disabled", true);
        firstNameError.innerText = "Imię musi składać się z minimum 3 znaków"
    } else {
        firstNameError.innerText = '';
        // submit.setAttribute("disabled", false);
    }

    if (surname.value.length < 3) {
        // submit.setAttribute("disabled", true);
        surnameError.innerText = "Nazwisko musi składać się z minimum 3 znaków";

    } else {
        surnameError.innerText = '';
        // submit.setAttribute("disabled", false);
    }

    // if (!regMail.test(mail.value)) {
    //     mailError.innerText = "Wzór poprawnego maila: as2@gl.co"
    // } else {
    //     mailError.innerText = '';
    //     // submit.setAttribute("disabled", false);
    // }

    // if (!regTel.test(phone.value)) {
    //     // submit.setAttribute("disabled", true);
    //     phoneError.innerText = "Podaj 9-cyfrową liczbę dodatnią"
    // } else {
    //     phoneError.innerText = '';
    //     // submit.setAttribute("disabled", false);
    // }

    // if (!regWww.test(www.value)) {
    //     // submit.setAttribute("disabled", true);
    //     wwwError.innerText = "Wzór poprawnego adresu url: http://blog.pl"
    // } else {
    //     wwwError.innerText = '';
    //     // submit.setAttribute("disabled", false);
    // }

    // if (problem.value.length < 50) {
    //     // submit.setAttribute("disabled", true);
    //     problemError.innerText = "Wiadomość musi składać się z minimum 50 znaków"
    // } else {
    //     problemError.innerText = '';
    //     // submit.setAttribute("disabled", false);
    // }
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
}




randomNumber()

let captchaFunction = () => {
    if (captchaAnswer.value == answer && firstName.value.length >= 3 && surname.value.length >=3) {
        console.log('brawo, dobry wynik')

        window.open('summary.html', 'summary')
    } else {
        console.log('podaj poprawną odpowiedź lub/i wypełnij poprawnie formularz');
        // submit.setAttribute("disabled", true);
    }

}


//window.open('summary.html','summary')
// captchaFunction()
submit.addEventListener('click', sendMessage);
submit.addEventListener('click', captchaFunction)