function varscope (){
    var a = 10;
    if(true){
        let a = 10;
        console.log(a)
    }
    console.log(a);
}

varscope();

// template literals

let fname = "Vinod";
let sname = "thapa";

console.log("My first name is "+fname+"and last name is "+sname); // es5
console.log(`My first name is ${fname} and last name is ${sname}`);

//array destructuring

let progL = ['java','js','php','c','c++'];
let [top1,top2,top3] = progL;
console.log(`${top1} ${top2} ${top3}`);

let [top1a,,,,top5a] = progL;
console.log(`${top1a}    ${top5a}`);

//program to swap two variables
let swap1 = 10;
let swap2 = 20;
[swap1,swap2] = [swap2,swap1];
console.log(`${swap1}   ${swap2}`);

//destructuring in object

const obj1 ={
    name:'Abhinav',
    age:24,
    place:'hyderabad',
    hobbies:{
        first : 'Playing',
        second: 'Coding'
    }
}

let {name,age:years,hobbies:secondhobby} = obj1;
console.log(`${name}  ${years} ${secondhobby.second}`);

// arrow functions

var sum = function (a,b){
    return a+b;

}

console.log(sum(2,3));

let arrfn = (a,b) => a+b;
console.log(arrfn(5,6));

//default parameters
//es5

function multiply(a,b){
    if( (typeof b) !== 'undefined'){  //this stetement used to write those ,what if there are many params missing
        console.log(a*b);
    }
}

multiply(4,5); //gives correct answer
multiply(4) //gives nan as answer as b is undefined
 
//to handle undefined in js 

let arrfnmult = (a,b=5) => a*b;
console.log( arrfnmult(4));

//rest parameters

//lets say we want to add many numbers

function sum1(a,b,c,d,e,f){
    return a+b+c+d+e+f;  //this is a bad way of writing code
}

//hence we will use rest params as below

function sum2(a,b,...input){
    let total=a+b;
    for(let i of input){
        total+=i;
    }
   return total;
}

console.log(`total sum is ${sum2(3,4,8,9,4,5,6)}`);

//spread operator converts the iterable to single value 
//case 1 

let arr1 = [4,5,6];
function math(a,b,c){
    console.log(a*b+c);
}

math.apply(null,arr1); //but the problem is we have to use apply method

//by using spread
math(...arr1); //it just unpacks the things (not into array) and places randomly

//case 2 array concat

let arr2 = [6,7,8];
let arr3 = [8,9,10];
 arr2 = arr2.concat(arr3);
 console.log(arr2);

 //by using spread operator

let arr5 = [...arr2,...arr3];
console.log(arr5);

//in use of copy method
let arr4 = [10,11,13];
let arr6 = arr4;
arr6.push(4,5);  //trying to copy
console.log(arr4);
console.log(arr6);  // both will have same value;

//by using spread operator

let arr7 = [...arr6];
arr7.push(90,91);
console.log(arr7);

//Math object , Math.sign and Math.truncate and exponentiation ** not demoing







