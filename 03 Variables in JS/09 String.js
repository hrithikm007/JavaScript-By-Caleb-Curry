var myName = "Hrithik007";
let myBackSlash = "Hrithik\\007";
console.log(myBackSlash);

console.log(`My Name is ${myName}`);  // acts as a fstrings in python
console.log(myBackSlash.length);
console.log(myName[3]);

//! String Methods

var favFood = "PaneerTikka";
console.log(favFood.charAt(2));  // equivalent to favFood[2]
console.log(favFood.concat(" of Hrithik Muttin"));
console.log(favFood.concat(" append1", " append2", " append3"));

let dummyString = "lorem epsum Hrithik007 Disha Shraddha Neha Chaitra";
let param1 = "Hrithik007";
let param2 = "Sneha"

console.log(dummyString.includes(param1));      // true
console.log(dummyString.includes(param2));      //false 
console.log(dummyString.includes(param1, 20));  //? start searching from index 20
// returns 12 as its Index from which Hrithik007 starts
console.log(dummyString.indexOf(param1));       

console.log(dummyString.indexOf("a",dummyString.indexOf("a")+1));
//? Searching for index of 2nd occurance of a
