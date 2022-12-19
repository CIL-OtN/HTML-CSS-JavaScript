
const userInput = document.getElementById("userInput");

var expression = '';

function press(num) {
	expression += num;
	userInput.value = expression;

	console.log(userInput.value);

}

function equal() {
	userInput.value = eval(expression);
	expression = '';
}

function erase() {
	expression = '';
	userInput.value = expression;
}