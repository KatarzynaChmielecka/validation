const summaryFunction = () => {
	const summaryName = document.querySelector('.summary-table__name');
	const summarySurname = document.querySelector('.summary-table__surname');
	const summaryMail = document.querySelector('.summary-table__mail');
	const summaryPhone = document.querySelector('.summary-table__phone');
	const summaryWWW = document.querySelector('.summary-table__www');
	const summaryProblem = document.querySelector('.summary-table__problem');

	summaryName.innerHTML = localStorage.getItem('firstName');
	summarySurname.innerHTML = localStorage.getItem('surname');
	summaryMail.innerHTML = localStorage.getItem('mail');
	summaryPhone.innerHTML = localStorage.getItem('phone');
	summaryWWW.innerHTML = localStorage.getItem('www');
	summaryProblem.innerHTML = localStorage.getItem('problem');
}

window.addEventListener('load', summaryFunction);
