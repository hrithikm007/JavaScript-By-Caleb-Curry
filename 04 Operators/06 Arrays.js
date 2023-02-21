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


