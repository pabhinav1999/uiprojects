//practice set
//1.Use logical operators to find ehether the age lies bewteen 10 and 20

let a = prompt("Enter the age:");
a = Number.parseInt(a);
if( a>10 && a<20)
console.log("Age is between 10 and 20");
else
console.log("Age is not between 10 and 20");

//2.Demonstrate the use of switch case in javascript

let b = prompt("Enter the number between 1 to 3");
switch(b){
    case '1':
        console.log("entered number is 1");
        let p = 1;
        p++;
        console.log(p);
    break;
    case '2':
        console.log("entered number is 2");
    break;
    default:
        console.log("entered number is 3");
    
}

//3.javascript program to find whether the number is divisible by 2 or 3

let c = Number.parseInt(prompt("Enter a division number"));
if(c%2 == 0 || c%3 ==0)
 console.log("number is divisisble by 2 or 3");
 else
 console.log("number is not divisible by both 2 and 3");

 //4.javascript program to find whether a number is dic=visible by 2 and 3

let d = Number.parseInt(prompt("Enter a division number"));
if(d%2 == 0 && d%3 ==0)
 console.log("number is divisisble by 2 or 3");
 else
 console.log("number is not divisible by both 2 and 3");

 let age = Number.parseInt(prompt("Enter age"))
 console.log((age > 18)? "You can drive":"You cannot drive");
