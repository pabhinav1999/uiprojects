//let and const in temporal dead zone

console.log(a);
var a = 10;
console.log(b);
let b = 10;

console.log(c);
var c = 10;
let d = 10;
console.log(d);

//Observe different types of errors
//Reference error
console.log(x);
var y = 10;
console.log(x2);
let x2 = 10;

//Syntax error
let z = 100;
// let z = 10;

//Type error
const m = 10;
m = 15;



