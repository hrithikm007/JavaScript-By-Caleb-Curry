(function()
{
    console.log("inside IIFE immediately invoked Function Expression");
    var x = 7;
    console.log(x)
})();

var x = 10;
// global variable & accessible inside window element
let y = 10; 
// global variable but not accessible inside the window element

// let n const are the block level variable keywords

//? var is a function level variable scope, if you declare a variable as var inside a block it will come outside until it founds a function bound, if not becomes a global variable

