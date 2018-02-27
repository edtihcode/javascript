// Global Scope


// function add(a,b) {
//   sum = a + b;
//
//   return sum;
// }
//
// console.log(add(1,2));
// console.log(add(1,5));
//
// function add(num1, num2){
//   return num1 + num2;
// }
//
// function addManyTImes(num, times){
//   var total = 0;
//   for (var i = 0; i < times; i++) {
//     total = add(total, num) ;
//   }
//
//   return total;
//
// }
//
// console.log(addManyTImes(10,10));
//
// function printManyTimes(text){
//   var array=[]
//
// }
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
