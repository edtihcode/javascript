var firstNumber = prompt("Type in the first number.");
firstNumber = parseInt(firstNumber);

var secondNumber = prompt("Type in the second number.");
secondNumber = parseInt(secondNumber);
//or secondNumber =  parseInt(prompt("Type in the first number."));

var sum = firstNumber * secondNumber;

document.getElementById("bodyID").innerHTML = "<h1>" + sum +  "</h1>";
