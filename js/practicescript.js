var quotes = [
  "Put your heart, mind, and soul into even your smallest acts. This is the secret of success. Swami Sivananda",
  "We must let go of the life we have planned, so as to accept the one that is waiting for us",
  "Nothing is impossible, the word itself says “I’m possible”! —Audrey Hepburn",
  "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. —Maya Angelou",
  "Whether you think you can or you think you can’t, you’re right. —Henry Ford",
  "Perfection is not attainable, but if we chase perfection we can catch excellence. —Vince Lombardi",
  "Believe you can and you’re halfway there. —Theodore Roosevelt"
  ];

  console.log(quotes);

var randomNumber = Math.random();// Math. is to access tools in the library. random will pull a number from 0.00 - 0.99

randomNumber = Math.floor(randomNumber); // floor round the number and removes decimal
var randomNumber = Math.random()*quotes.length;

randomNumber = Math.floor(randomNumber);
document.getElementById("bodyID").innerHTML = quotes[randomNumber];
