let myName = "hrithik007";
myName.toUpperCase();
console.log(myName); // Upper Case is not doing anything
myName = myName.toUpperCase();
console.log(myName); // after re-assigning it works

let yourName = new String("Gal Gadot"); // object version of primitives,
//? Can convert to primitives using yourName.valueOf();

console.log("type of myName", typeof(myName));
console.log("type of yourName", typeof(yourName));


