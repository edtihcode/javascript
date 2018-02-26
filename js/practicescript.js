// Global Scope


function add(a,b) {
  sum = a + b;

  return sum;
}

console.log(add(1,2));
console.log(add(1,5));

function add(num1, num2){
  return num1 + num2;
}

function addManyTImes(num, times){
  var total = 0;
  for (var i = 0; i < times; i++) {
    total = add(total, num) ;
  }

  return total;

}

console.log(addManyTImes(10,10));
