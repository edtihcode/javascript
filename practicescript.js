
//
// function makeSentence() {
//   console.log(arguments[0]);
//
// }
// makeSentence("asd");
// makeSentence("gasd");
//
// function createPerson(firstNamestring, lasNameString, addressString){
//   return null;
// }

// var myArray = ["4 feet ", "1 tail", "2 eyes"];
// var storage = function myFunction() {
//   console.log("meow!");
// }
// var cat  = {
//   legs :4,
//   tails: 1,
//   eyes: 2,
//   cry : function() {console.log("meow");},
//   hungry : function() {console.log("meow MEOW, me hungry!");},
//   cry2 : storage
// };
// console.log(cat.cry2());
// console.log(cat.hungry());

function createAnimals(name1, type1, age, location, feet, tail, eyes, ears){
  var animalObject ={
    name1: name1 ,
    type1: type1,
    age: age,
    location: location,
    feet: feet,
    eyes: eyes,
    ears: ears
  };
  return animalObject;
}

myFirstAnimal = createAnimals("Dizzy" , "cat", null, "SanFrancisco",4, 1, 2, 2);

console.log(myFirstAnimal.name1);
console.log(myFirstAnimal.location);
myFirstAnimal.location = "arizona";
console.log(myFirstAnimal.location);
