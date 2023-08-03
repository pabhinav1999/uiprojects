
// getName();   // namaste js
// console.log(x);  // output : undefined if x is defined or else gives error in console saying uncaught reference error at x

// Hoisting is a phenomenon in which you can access javascrpt variables and functions even before you initialise it
// getName();
// console.log(x);
// console.log(getName);
// console.log(getName2);
// console.log(getName3);
//only in case of proper function declarations only functions are copued

var x = 7;
function getName(){
    console.log('Namaste Javascript');
}

getName();
console.log(x);
console.log(getName);

// arroe function
// var getName2 = () => {
//     console.log('Namaste js 2');
// }

// var getName3 = () => {
//     console.log('Namaste js 3');
// }



// getName();     //straight forward gives output as namaste js
// console.log(x); // output 7