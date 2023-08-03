// lecture5 
// memeory space is variable environament
var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x); // finds x value in its local memory and 10 is printed
}
function b(){
    var x = 100;
    console.log(x);
}