//TODO Datatypes in JS are 1) Primitives 2) Objects

let x = 7; //  we can change x as x = "Hrithik007" & JS allows us to do so
let y = "Hrithik";

let z = y + x;
console.log("y+x  is", z); // Type Cohersion in JS 

//? Null & Undefined in JS 

let a; // its uninitialized by us so its value is UNDEFINED
console.log("a is ", a, "meaning a is uninitialized & computer assigned undefined to it");

a = null;
console.log("a is now ", a, "meaning a has absence of value");

x = true; // false; this is a boolean variable
console.log(x);

// ? Objects in JavaScript are JSON 

let person =
{
    "name": "Hrithik007",
    "age": 23,
    favFood: "Paneer Tikka -_- ",
    gf: function () {
        console.log("Many Beautifull Chicks Out There");
    }
}

person.gf();

//! Creating a Date object

let now = new Date();
console.log(now);

// arrays -> everything other than primitives are objects
let grades = [10,20,30,40,50]
console.log(grades)

