var niceDay = '<p> Today \'s weather is really nice!</p>';
var rainyDay = '<p> Today is a really sad day</p>'
var day = "sunny"

day = prompt("Type 'sunny' or 'rainy'");// prompt add user input to replace var
// $("test").html(rainyDay); this is jQuery for if (day == "rainy"){
//   document.getElementById("bodyID").innerHTML = rainyDay;
// }else if (day == "sunny") {
//   document.getElementById("bodyID").innerHTML = niceDay;
// }



if (day == "rainy"){
  document.getElementById("bodyID").innerHTML = rainyDay;
}else if (day == "sunny") {
  document.getElementById("bodyID").innerHTML = niceDay;
}
