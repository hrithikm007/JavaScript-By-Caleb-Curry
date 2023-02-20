var abs        = Math.abs(-36);         // +36
var goUp       = Math.ceil(0.000001);   // +1 
var goDown     = Math.floor(0.000001);  // +0
var powerUp    = Math.pow(3, 2);        // 3^2 == 9
var roundUp    = Math.round(4.9);       // 5
var roundDown  = Math.round(5.1);       // 5
var isPositive = Math.sign(-Infinity);  // -1 (false)
var isZero     = Math.sign(0);          // 0 (false)
var getInt     = Math.trunc(4.999999);  // 4

console.log({ abs, goUp, goDown, powerUp, roundUp, roundDown, isPositive, isZero, getInt });