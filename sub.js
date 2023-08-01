const userInput1 = prompt('Type a number');
const userInput2 = prompt('Type another number');

function multiplyThenAgainByHundred(num1, num2){
	let result = (parseInt(num1) * parseInt(num2)) * 100;
	return result;
}

alert(`The product of your numbers multiplied by 100 is ${multiplyThenAgainByHundred(userInput1,userInput2)}`);