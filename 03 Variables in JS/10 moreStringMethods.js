let s1 = "Hrithik007 the ceo of the World";

console.log(s1.substring(0,10)); // [) includes start excludes end
console.log(s1.substr(2,2)); // start from index 2 & include 2 characters from there

// console.log(s1.slice(0,10)); // slice works similar to substring

console.log(s1.toUpperCase());
console.log(s1.toLowerCase());

s2 = "      hrithik007      \t\t\t\t\n "
// trim() can be used for form validation
//? trimRight(), trimLeft(), trimStart(), trimEnd()
console.log(s2.trim()); // removes first n last spaces in a string 

// console.log(s2.repeat(300)); // repeats s2 string 300 times

console.log(s1.split(" "));
// collection of words as an array separated by spaces

console.log(s1.search('r')); // accepts regular expressions as well