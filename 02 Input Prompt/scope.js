// Whenever we create a variable in JS, the variable is associated to the window object
var a = 7;
//? print console.log(window) in the console of the browser. window is a Global Object

// if we want to make the varibales local to a FUNCTION then declare them inside a function using VAR keyword

 age = 6;

(function () {
  // IIFE - immediated invoked function expression
  var age = 7;
  // if used var keyword then variable will be local to the scope

  globAge = 77;
  //  if declared variable without var keyword then by default will be declared as Global
})();

if(1)
{ //TODO as var is a function level keyword it will check if age is defined anywhere outside its scope, its defined in window scope hence it uses it and changes it to 7.
    var age = 7;
}
console.log(age);

// ! we can use LET & CONST to define a block level local variables, say if block 

if(1)
{
    let age = 1;
    console.log("age inside the if block, notice here that its not trying to access the global age unlike the case for var",age);

    const permanent = "Hrithik 007 the best in the world"
    // ? use const to create block level variables but these cant be changed in future lines of code
    // permanent = "Swati 009 hrithik's legendary sister" this will throw an error cant change a constant variable
}

console.log(age);