// write a code for sum(1)(2)(3)(4)();

// it is basically a easy question , remenber javascript functions are first order functions where we can
//use them as variables

//for these questions try to solev first two params

// let sum = function (a){
//     return function (b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

//convert the above function into recursion

let sum = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)());
// console.log(sum(1)());

//javascript is beautiful

(function (a) {
  return (function () {
    console.log(a);
    a = 6;
  })();
})(21);


