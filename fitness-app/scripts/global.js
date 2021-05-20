console.log('Hello world');


var button = document.querySelector('#bereken');

button.addEventListener('click', berekenEpley);

function berekenEpley(event) {
	event.preventDefault();

	var weight = document.querySelector('#weight').value
	var reps = document.querySelector('#repetitions').value

	// Epley formula
	var score = (0.033 * reps * weight) + weight;

	var result = document.querySelector('#result');

	result.textContent = score;

}
