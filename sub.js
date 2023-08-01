const userInput1 = prompt('Type a number');
const userInput2 = prompt('Type another number');

function multiply(num1, num2){
	let result = parseInt(num1) * parseInt(num2)
	return result;
}

alert(`The multiplication of your numbers is ${multiply(userInput1,userInput2)}`);