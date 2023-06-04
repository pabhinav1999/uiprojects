//create an array of numbers and take input from user to add numbers
let a = [1,2,3,4,5];
let k = 0;
let enteredEle;
do{
    enteredEle = prompt("Enter a number:");
    a.push(parseInt(enteredEle));
}while(parseInt(enteredEle) !== 0)
console.log(a);


//filter for numbers divisible by 10 from a given aray
let a2 = [34,50,98,100,70,67];
console.log(a2.filter((value)=>{
    return value%10===0 ; 
}))

//create an array of square of given numbers
let a3=[1,2,4,6,8,19];
console.log(a3.map((value)=>{
    return value*value;
}))

//usde reduce to calculate factorial of a given number from an array of first n natural 
// numbers(n being the number whose factorial needs to be calulated)

let a4 = [1,2,3,4,5];
const reduce_fn = (acc,value)=>{
    return acc * value;
}
console.log(a4.reduce(reduce_fn));