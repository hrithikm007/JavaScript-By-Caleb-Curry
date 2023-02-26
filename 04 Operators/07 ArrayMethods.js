let hbm = [9, 8, 7, 6, 5, 4, 3, 2, 1];
hbm.sort();
console.log("🚀3 ~ hbm:", hbm)

hbm.push(23, 45, 21, 14, 7, 8, 99);

console.log(hbm.sort());
// Output   [1, 14, 2, 21, 23, 3, 4, 45, 5,  6,  7, 7, 8,  8, 9, 99 ]
// The sorting is based on first digit & not on weight of the number 

//? to get proper sorting we pass a callback function as an arguement & then invoked inside

hbm.sort(function (a, b) {
    return a - b;  // a>=b not working 😥
});

console.log("🚀 ~ file: 07 ArrayMethods.js:18 ~ hbm:", hbm)

//? reverse method

console.log("Reversed hbm ", hbm.reverse()); // reverse also alters the original array 

hbm.fill(-7, 0, hbm.length); // fill -7 from index 0 to array end. Note (start_idx,end_idx]
console.log("Filled HBM ", hbm);

let nums = [-1, -2, -3];
hbm = [1, 2, 3];

//! Main Difference between push & concat is Push will change the original array & returns the new length as the return type, but concat wont alter the original array it returns an array which we need to store in an variable

let concat = hbm.concat(nums);
console.log("Concat array ", concat);

console.log("String of elements inside array ", hbm + nums, typeof (hbm + nums));

//? Converting an array elements to string

console.log(hbm.join());
// prints "1,2,3" as String datatype with "," being the De-Limiter. We can set the De-Limiter as - if we need to

console.log(hbm.join("-")); // prints "1-2-3"
console.log(hbm.join("")); // prints "123"

console.log(hbm.slice(1, 3)); // returns hbm[1,3) => hbm[1,2];


