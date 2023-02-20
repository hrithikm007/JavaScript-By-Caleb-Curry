let x = "11"

console.log("Decimal is ", Number(x));

//! Binary value of bit 11 is 3  
console.log("Binary is ", Number.parseInt(x,2)); //? its Basically Binary(11) == 3

//? Octal Value of Bits 11 is 9
console.log("Octal is ", Number.parseInt(x,8));
console.log("HexaDecimal is ", Number.parseInt(x,16));
console.log("");


//TODO say we have 17 and we need its Binary form then 

let input = Number("17");

//! toString Needs datatype other than string right so we converting the input to Number & then Passing
console.log("Decimal of",input, input.toString());

// Converting Decimal(17) to Binary(17) 
binary = input.toString(2); // gives 10001
octal = input.toString(8);
hexadecimal = input.toString(16);
console.log({binary,octal, hexadecimal});
