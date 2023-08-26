//function declaration or function statement
function a(){
    console.log("a called");
}


//function expression
var b = function (){
    console.log("b called");
}

a();
b();

// anonymous function
// function (){
//     console.log("anonymous called");  //identifier expected
// }

// named function expression
var c = function xyz(){
    console.log("xyz called");
}

console.log(c);

function firstClass(param1,param2){
    console.log(param1,param2);
}

var arg2 = function(){
    console.log('param2 called');
}

function abc(){
    console.log("abc called");
}

firstClass(function(){
    console.log('param1 called');
},abc);

var ffc = function(param1){
    return function (){

    }
}

console.log(ffc("abc"));
//The ability to use functions as values id known as first class functions

//conclusion you can use functions as variables