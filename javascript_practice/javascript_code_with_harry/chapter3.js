// 1.Write a program to print marks of students using for loop

let marks = {
    "Harry":98,
    "Shiva":65,
    "Afg":76
}

for(let i=0;i<Object.keys(marks).length;i++){
  console.log("Marks of "+Object.keys(marks)[i]+"are "+marks[Object.keys(marks)[i]]);
}

//use for loop for printing marks
for(let key in marks){
    console.log(marks[key]+" "+key);
};

//write a program to print try again until the user enters correct number

let correctNumber= 5;
let enteredNumber;

do {
let numberToEnter = prompt("Enter number");
enteredNumber = parseInt(numberToEnter);
if(correctNumber !== enteredNumber)
console.log("Try again");
else{
console.log("Number matched")
break;
}
}while(correctNumber !== enteredNumber)

//Write a program to print mean of 5 numbers
function meanOf5numbers(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}

console.log(meanOf5numbers(34,12,67,89,32));


    