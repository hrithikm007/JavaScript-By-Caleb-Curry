//  Math. press ctrl + space, the one in purple are Math Methods, one in blue are Math Properties
console.log(Math.LN10);
console.log(Math.E);
console.log(Math.SQRT1_2); // root of (1/2)

let x = 69696969696969
console.log(x.toExponential(2)); // meaning 6.96 * 10^13

let y = 5.6765432
console.log("$",y.toFixed(2)); // rounded off after 2 decimal digits
console.log(x.toPrecision(3)); // 6.97*10^13 means 6.97 => 3 significant digits

let z = new Number(7); // object
let num = z.valueOf(); // converted object to its primitive => number 

