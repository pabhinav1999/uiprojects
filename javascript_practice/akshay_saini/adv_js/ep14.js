// what is a call back function

setTimeout(function (){
   console.log("timer");
}, 5000)

function x(y){
   console.log("x called");
   y();
}

x(function y(){
    console.log("y called");
})