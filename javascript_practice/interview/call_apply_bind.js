// Demo for call apply and bind

let name1 = {
    firstName : 'AbhinavKumar',
    lastName: 'Pulijala',

}

let name2 = {
    firstName : 'Sachin Tendulkar',
    lastName: 'Ramesh',

}

var printFullName = function (hometown,state){
    console.log(this.firstName +" " + this.lastName + " from "+hometown+" of state "+state);
}

//name1.printFullName();

// Instead of rewriting print full name function , we should use that function by giving reference to this as first parameter

//name1.printFullName.call(name2);

//calling the print function of name1 by giving refernce to name2

this.printFullName.call(name1,"Hyderabad","Telangana");


// remember this creates a local scope

//only difference between call and apply is the argumenst are given in form of array in apply
this.printFullName.apply(name2,["Mumbai","Maharashtra"]);

//bind creates the copy of it and returns a fucntion

copyPrintFullName = this.printFullName.bind(name1,"Adilabad","Tealangana");
console.log(copyPrintFullName);
copyPrintFullName();

//currying

//function currying can be done in two ways

//using bind method ..literally playing with arguments

let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo =  multiply.bind(this,2);
multiplyByTwo(3);  // so this refers to this and 2 refers to x , in the next step 3 refers to y argument

let multiplyByThree =  multiply.bind(this);
multiplyByThree(3,10);  // so this refers to this and 2,3 refers to x ,y 

let multiplyByFour =  multiply.bind(this,4,5);
multiplyByFour();  // so this refers to this and 2,3 refers to x ,y 

//currying using closures

//closure is basically returning function and when returned the function has access to its outside variable due to lexical scope theory

let division = function(x){
    return function(y){
        console.log(y/x);
    }
}

let divisionof20 = division(20);
divisionof20(5);





