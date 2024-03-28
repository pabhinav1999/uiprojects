
"use strict"

console.log('global space',this);

function x(){
   console.log(this);  //if we use non strict mode it substitutes the undefined this using global object
}

x();
window.x();  // reference is important in tsrict mode

//Inside call ,apply, bind
const student1 = {
    name : 'Aju',
    printName: function(){
        console.log(this.name);
    }
}

const student2 = {
    name: 'Varghese'
}

student1.printName.call(student2);

//Inside arrow functions

const obj1 = { 
    a: 10,
    x: function() {
        console.log(this);
    }
}

obj1.x();

const obj2 = {
    a: 10,
    x: () => {
        console.log('arrow function',this);
    }
}

obj2.x();

const obj3 = {
    a: 10,
    x: function (){
        const y = () =>{
            console.log('nested function',this)
        }
        y();
    }
}

obj3.x();

const obj4 = {
    a: 10,
    x: () =>{
        const y = () =>{
            console.log('nested arrow functions',this);
        }
        y();
    }
}

obj4.x();