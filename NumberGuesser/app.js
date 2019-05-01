/*
* Game Function:
* 	- Player must guess a number between a min and a max
* 	- Player gets a certain amount of guesses
* 	- Notify the player of the correct answer if lose
* 	- Let player choose to play again
* */

// ask for the min and max range numbers
let minUserInput =  prompt('Enter a minimum number');
let maxUserInput = prompt('Enter a maximum number');

// Game values
let min = minUserInput,
	max = maxUserInput,
	winningNum = getRandomNum(min, max),
	guessesLeft = 3;

// UI elements
const game =  document.querySelector('#game'),
	minNum =  document.querySelector('.min-num'),
	maxNum =  document.querySelector('.max-num'),
	guessBtn = document.querySelector('#guess-btn'),
	guessInput = document.querySelector('#guess-input'),
	message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
	if (e.target.classList.contains('play-again')) {
		window.location.reload();
	}
});

// Listen for guess
guessBtn.addEventListener('click', function() {
	let guess = parseInt(guessInput.value);

	// Validate input
	if (isNaN(parseFloat(guess)) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}

	// check if won
	if (guess === winningNum) {
		// game over - won
		gameOver(`${winningNum} is correct, YOU WIN!`,1)
	} else {
		// wrong guess
		guessesLeft -= 1;
		if (guessesLeft === 0) {
			// game over - lost
			gameOver(`Game Over, YOU LOST! The correct number was ${winningNum}.`, 0)
		} else {
			// game continues - wrong answer

			// clear guess input
			guessInput.value = '';
			// change guess input border to red
			guessInput.style.borderColor = 'red';

			setMessage(`${guess} is not correct. ${guessesLeft} guess/es left.`);
		}
	}
});

//core functions

// set a message to the user
function setMessage(msg, color = 'black') {
	message.style.color = color;
	message.textContent = msg;
}

// game over
function gameOver(msg, status) {
	let color = 'green';
	// disable input
	guessInput.disabled = true;
	if (status === 1) {
		// game won
		// change border color
		guessInput.style.borderColor = 'green';
	} else {
		//game lost
		// change border color
		color = 'red';
		guessInput.style.borderColor = 'red';
	}

	// set message
	setMessage(msg, color);

	// play again?
	guessBtn.value = 'Play again?';
	guessBtn.className += ' play-again';
}

// get winning number
function getRandomNum(min, max) {
	return Math.floor(Math.random() *  (max - min + 1) + min);
}
