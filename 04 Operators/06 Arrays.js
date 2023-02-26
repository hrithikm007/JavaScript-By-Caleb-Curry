let ages = [12,34,57];
console.log(ages);
console.log(ages.length);

ages.length = 30;
console.log(ages.length, ages); 
// length of array changed to 30 but just 3 items in array

ages[100] = "swati";
console.log(ages.length,ages);
//? Here JS added element at index 100 so 4 items in array and 97 empty items

//! Multi Dimensional Arrays

let stuff = [12,"hrithik007", function(){console.log("hellow");}, [3,7,13] ]
console.log(stuff);
console.log(stuff[3][1]);
stuff[2]();

//! Addition & Deletion of into Arrays

let arr = [1,2,3]

//? push returns the final size of the array after the push
let added = arr.push(7);
console.log({arr,added});

//? pop() returns the element thats popped out from the array
let popped = arr.pop();
console.log({arr,popped});


//TODO similar to push we have unshift {push from start} & pop is shift {pop from beginning}
let srr = [2,7,4,5,1,3,2,4];

let shift_pop = srr.shift();
console.log({shift_pop, srr});

srr =  [ 7, 4, 5, 1, 3, 2, 4]
// unshift adds elements from beginning & returns new length
let new_len = srr.unshift(7,8);
console.log({new_len,srr})

//? splice(index,count) starts from index & deletes x num of elements

arr = [8,9,0,4,8,2,4,3,2,9];
console.log("🚀 ~ file: 06 Arrays.js:47 ~ arr:")
console.log(arr.splice(3,4),"Array: ",arr);

// we can also pass the elements to add from 3rd argument onwards to splice
//? Orig Array:  [ 8, 9, 0, 3, 2, 9 ]

//! splice will add 7,7,7,7 at index 2 & shift remaining to right
arr.splice(2,1,7,7,7,7)
console.log("Modified arr",arr);
