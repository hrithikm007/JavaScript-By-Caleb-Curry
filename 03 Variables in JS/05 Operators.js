var num = 10;
var n2 = 10;
console.log(num%4.7);

var post_inc = num++;
var pre_inc = ++n2;

console.log({num, post_inc, n2, pre_inc});

//! parseInt & parseFloat Methods

let y = "7";
let numY = Number(y); // type casting to integer
console.log(post_inc + numY);

let sentence = "17.77777 is a number in a string can be parsed using parseFloat"
//! If we do num = Number(sentence) we get the O/P as NaN but with parseInt we get as 
let numZ = Number.parseFloat(sentence);
console.log(post_inc + numZ);


