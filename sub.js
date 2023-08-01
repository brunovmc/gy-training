const userInput1 = prompt('Type a number');
const userInput2 = prompt('Type another number');

function sum(num1, num2){
	let result = parseInt(num1) - parseInt(num2)
	return result;
}

alert(`The subtraction of your numbers is ${sum(userInput1,userInput2)}`);