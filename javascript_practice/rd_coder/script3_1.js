//1. What is function declaration?
function square(nums) {
    return nums * nums ;  // function declaration, definition, statement
}

const square1 = function(nums){
    return nums * nums     // function expression // storing function as variable // right side part is called anonympous functions
}

//first class functions, functions can be used as variables
function displaySquare(squarefn){
    console.log("Hello "+ squarefn(5));
}

displaySquare(square);

//IIFE ( Immediately Invoked function expression)

(function square2 (nums){
   console.log(nums * nums);
})(5);

for(let i=0 ; i<5 ; i++){
    setTimeout(()=>{
           console.log(i);
    }, i * 1000)
}

for(var i=0 ; i<5 ; i++){
    setTimeout(()=>{
           console.log(i);
    }, i * 1000)
}

var x = 21;
function dispx(){
    console.log(x);  // prints undefined because x is found in local scope , but not initialised yet
    var x = 20;
}

dispx();

//rest and spread operators
function multiply(... nums){  // when it is used in params , it is rest operator

    console.log(nums[0]* nums[1]);
}

let arr= [9,8,6,5];
multiply(...arr); // when it is used in arguments it is spread opearaor

multiply(7,8,9,6);

//call back functions 
//eg. eventlisteners , settimeout

//difference between arrow functions and normal functions

let user = {
    userName: 'Abhinav',
    
    greeting: function(){
    console.log( "Hello "+this.userName);
    },

    greeting2: () => {
        console.log("Hello2 "+this.userName);
    }
}

user.greeting2();
user.greeting();



