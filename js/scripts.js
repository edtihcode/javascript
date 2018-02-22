//This is a comment
/*
anything here is a comment
comment syntex
*/

var name = 100;
var n = 20;


console.log(name+n);/* it will sent anything in () to the browser
make sure your root folder have the html file that you want to sent to with the right script inside the html file <script src="js/scripts.js"></script> */


alert (name) // this gives you a pop up window in your browser on with value (name)
var sum1 = "100"+"100" ; //gives 100100
var sum2 = 100+100; //gives 200

/* not valid: True, TRUE, trUe, etc
 true, falso
*/

var go = true;
var katyage = 44;
if (katyage > 21) {
  console.log("take a drink");
}else {
  console.log("you are too young");
}
if (katyage != 21) {
  console.log("cant drink");
}else {
  console.log("you can drink");
}
/*
== : comparison
=== : Type comparison
>= or >==: equal to or greater
<= or <==: equal to or smaller
!= or !==: should not be the same as left side
*/
console.log(sum1,sum2);
console.log(go);
console.log(false);

// week 3 day 2
var count = 0;

while (count < 10) {
  //count = count+ 1; //or count ++;
  //count-- = count - 1
  count++;
  console.log("THe current loop is " + count);
  console.log(sum1, sum2);
}


var firstline = "*";
while (count<20) {
  console.log(firstline);
  firstline = firstline + "+"
  count++;

  if (count%2 === 1) {
      firstline= firstline + " "
  }

}
