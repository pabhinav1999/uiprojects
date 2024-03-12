let c = { greeting : 'Hey!'};
let d = c;

c.greeting = 'hello';
console.log(d.greeting);

console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});

let person = { name: 'Lydia'};
const members = [person] ;
person = null;
console.log(members);

const value = { number: 10};

const multiply = (x =  { ...value}) => {
    
    console.log((x.number *= 2));
}

multiply();  //20
multiply();  //20
multiply(value); //20
multiply(value); //40

// x= { ...value } clones the object , not refer to original variable

let personObj1 = {
    name : 'Alex',
    age : 30
}

function changeAgeAndRef(person){
   person.age = 24;
   person = {
    name: 'John',
    age: 50
   }

   return person;
}
let personObj2 = changeAgeAndRef(personObj1);
console.log(personObj1);
console.log(personObj2);

//shallow copy and deep copy 

//clone the objects

const user1 = {
    name: 'Rohit',
    jersey : 45
}

const user1_clone1 = { ...user1};
console.log(user1_clone1);

const user1_clone2 = Object.assign({},user1);
console.log(user1_clone2);

const user1_clone3 = JSON.parse(JSON.stringify(user1));
console.log(user1,user1_clone3);