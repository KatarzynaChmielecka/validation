const summaryFunction = () => {
	const summaryName = document.querySelector('.summary__name');
	const summarySurname = document.querySelector('.summary__surname');
	const summaryMail = document.querySelector('.summary__mail');
	const summaryPhone = document.querySelector('.summary__phone');
	const summaryWWW = document.querySelector('.summary__www');
	const summaryProblem = document.querySelector('.summary__problem');

	summaryName.innerHTML = localStorage.getItem('firstName');
	summarySurname.innerHTML = localStorage.getItem('surname');
	summaryMail.innerHTML = localStorage.getItem('mail');
	summaryPhone.innerHTML = localStorage.getItem('phone');
	summaryWWW.innerHTML = localStorage.getItem('www');
	summaryProblem.innerHTML = localStorage.getItem('problem');
}

window.addEventListener('load', summaryFunction);
