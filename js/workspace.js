

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


//clear
function foodcost(){
  var cost=Math.floor(Math.random()*10);
  return cost;
  console.log(foodcost());
}
function budget(cash,meals, numberOfKids) {
  var cashperkid = cash/numberOfKids/meals;
  return cashperkid;
}

function satisfaction(cash, meals,numberOfKids){
  array=["$"+cash+ " was not able to feed "+numberOfKids+" kids "+meals+" meals! ", "$"+cash+ " was able to feed "+numberOfKids+" kids "+meals+" meals!"];
  if (budget(cash,meals,numberOfKids)<foodcost()) {
    return array[0];
  }
  else  {
    return array[1];
  }
}
console.log(satisfaction(100,4,5));
