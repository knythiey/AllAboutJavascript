// Listen for the submit button
document.querySelector('#loan-form').addEventListener('submit',
	function(e) {
		// hide results first
		document.querySelector('#results').style.display = 'none';

		// show loader
		document.querySelector('#loading').classList.remove('d-none');
		document.querySelector('#loading').style.display = 'block';

		setTimeout(calculateResults, 1000);
		e.preventDefault();
	});

// Calculate Results
function calculateResults() {
	// UI vars
	const amount = document.querySelector('#amount');
	const interest = document.querySelector('#interest');
	const years = document.querySelector('#years');
	const monthlyPayment = document.querySelector('#monthly-payment');
	const totalPayment = document.querySelector('#total-payment');
	const totalInterest = document.querySelector('#total-interest');

	// Values
	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;

	// compute monthly payment
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal * x * calculatedInterest) / (x-1);

	// hide loader
	document.querySelector('#loading').className += ' d-none';

	// check if monthly is finite number
	if (isFinite(monthly)) {
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

		// show results div
		document.querySelector('#results').classList.remove('d-none');
		document.querySelector('#results').style.display = 'block';
	} else {
		showError('Please check your numbers');
	}
}

// Show Error
function showError(errorMsg) {
	// create Div
	const errorDiv = document.createElement('div');

	// Get elements
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');

	// add class
	errorDiv.className = 'alert alert-danger';

	// create text node and append to div
	errorDiv.appendChild(document.createTextNode(errorMsg));

	// Insert error above heading
	card.insertBefore(errorDiv, heading);

	// Clear error after 3 seconds
	setTimeout(clearError, 3000);
}

// remove error message
function clearError() {
	document.querySelector('.alert').remove();
}