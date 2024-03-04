function subscribe() {
    var name = "road side coder";
    function displayName() {
        alert(name);
    }
    displayName();
}

subscribe();


function makeFunc() {
    var browserName = 'Mozilla';
    function displayName(num) {
        console.log(browserName, num);
    }

    return displayName;
}

makeFunc()(5);

//closure scope chain

//global scope
var e = 10;
function sum(a) {
    return  function(b){
        return function(c){
            //outer function scope
            return function(d){
                //local scope
                return a + b + c + d + e;
            }
        }
    } 
}

console.log(sum(1)(2)(3)(4));
//o/p based questions

let count = 0;
(function printCount() {
    if(count === 0){
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();

//converting above iife to normal
// let count = 0;
// function printCount() {
//     if(count === 0){
//         let count = 1;
//         console.log(count);
//     }
//     console.log(count);
// }
// printCount();

//q2. write a function that would allow you to do this
 var addSix = createBase(6);
 addSix(10); //returns 16
 addSix(21); //return 27;

 function createBase(basenum){
    return function(num){
        return num + basenum;
    }
 }

 console.log(createBase(6)(10));
 console.log(createBase(6)(21));

 //ques 3: Time optimization

 function find(){
    let a = [];
    for( let i = 0; i < 10000000 ; i++){
        a[i] = i * 1;
    }
    return function(index){
        console.log(a[index]);
    }
 }

 var closure = find();
 

 console.time("6");
 find(6);
 console.timeEnd("6");
 console.time("12");
 find(12);
 console.timeEnd("12");


 console.time("6");
 var closure = find();
 closure(6);
 console.timeEnd("6");
 console.time("12");
 closure(12);
 console.timeEnd("12");

 //closure helps us in minimising time

 function a() {
    for( var i=0; i< 3; i++){
        setTimeout(function log(){
            console.log(i);
        }, i * 1000);
    }
 }

 a();
 //output is 3,3,3

 //to make it  0,1,2 we can use let

 function a1() {
    for( let i=0; i< 3; i++){
        setTimeout(function log(){
            console.log(i);
        }, i * 1000);
    }
 }

 a1();

 //but if there is restriction in using let
 //then use closures

 function ac() {
   
    for( var i=0; i< 3; i++){
        function inner(i){
        setTimeout(function log(){
            console.log(i);
        }, i * 1000);
     }
        inner(i);
    }
 }

 ac();

 //private counter where it increments the value and shows the value

 var counter = 0;

 // if we want to increment counter , increase by 5 but the counter variable is accesed
 counter = 8;
 counter +=5 ;
 console.log(counter); // this is public counter because counter variable can be changed

function counter(){
 var _counter = 0;

 function incrementNum(increment){
    _counter = _counter + increment;
 }

 console.log(_counter);

 function printCounter() {
    console.log(_counter);
 }

 return { incrementNum , printCounter}
}

const pc1 = counter();
pc1.incrementNum(5);
pc1.incrementNum(109);
pc1.printCounter();


 



