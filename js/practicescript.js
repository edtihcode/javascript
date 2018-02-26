

function printHello() {
  console.log("hello");
}
function multiply() {
  var firstNumber = document.getElementById("num1").value;
  var secondNumber = document.getElementById("num2").value;
  console.log(firstNumber,secondNumber);
  var product = Number.parseInt(firstNumber) * Number.parseInt(secondNumber);

  console.log(product);
  document.getElementById("results").value = product;

}


function add() {
  var firstNumber = document.getElementById("num1").value;
  var secondNumber = document.getElementById("num2").value;
  var results = Number.parseInt(firstNumber) + Number.parseInt(secondNumber);
  document.getElementById("results").value = results;
}

function divide() {
  var firstNumber = document.getElementById("num1").value;
  var secondNumber = document.getElementById("num2").value;
  var results = Number.parseInt(firstNumber) / Number.parseInt(secondNumber);
  document.getElementById("results").value = results;
}

function minus() {
  var firstNumber = document.getElementById("num1").value;
  var secondNumber = document.getElementById("num2").value;
  var results = Number.parseInt(firstNumber) - Number.parseInt(secondNumber);
  document.getElementById("results").value = results;
}
