 console.log(Number.MAX_SAFE_INTEGER);
//  It tells whats the maximum safe number that we can save

 let x = Number.MAX_SAFE_INTEGER + 4;
 console.log(x);
 console.log(Number.isSafeInteger(x));
//  indicates if the number we have now is safe to store in javascript or not 

let babies = 9007199254740991;
console.log(Math.pow(babies,6000));  // gives +INFINITY
console.log(1/-0);                   // gives -INFINITY


console.log(console.log()+2); // NaN Not a Number

