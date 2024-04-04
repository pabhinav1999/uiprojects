//output 1

const per1 = {
    name: 'Ashik'
}

function name1(){
    console.log(`My name is ${this.name}`)
}

const per2 = {
    name: 'Ravi'
}

let per2bind = name1.bind(per2);
name1.call(per2);
console.log(per2bind);


//output2 

const age = 10; //no effect of this variable

const pers1 = {
    name: 'Jaydev',
    age: 24,
    getAge: function(){
         return this.age
    }
}

const pers2 = {
    age : 35
}

console.log(pers1.getAge.call(pers2));

//output3 

var emoji1 = '😂';

setTimeout(()=>{
    const emoji1 = '❤️';

    const data = {
        emoji1: '😍',
        getEmoji: function(){
            return this.emoji1;
        }
    }

    console.log(data.getEmoji());
    console.log(data.getEmoji.call(this))
},0);

//output 4 

// 4. write printAnimals() in such a way that it prints all animals in object below.
const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
  ];
  
  function printAnimals(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
  }

  for(let i = 0; i< animals.length ; i++)
  {
      printAnimals.call(animals[i],i)
  }

  //5. How to append an array to another array
  const array = ['a', 'b'];
  const elements = [0, 1, 2];
 // array.push(elements); //outputs ['a','b',[0,1,2]]
  array.push.apply(array,elements);
  console.log(array);

//  6. Find min/max in an array and use apply to enhance a built-in function.
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply

let max = Math.max.apply(null, numbers); // equal to Math.max

let min = Math.min.apply(null, numbers); // equal to Math.min 

// vs. simple loop based algorithm

max = -Infinity, min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

//outptub 7
function f() {
  console.log ( this ); 
}

const a = 10;
let user = {
  g: f.bind(null)
};

console.log(user.b)
user.g();

//output 8
function f1(){
    console.log(this.name)
}

let f2 = f1.bind({name : 'John'}).bind({name: 'Ann'})
f2();

//bind chaining doesnt exist

function checkPassword(success,failure){
  let password = prompt('Enter password =');
  if(password === 'abc'){
    success();
  }
  else {
    failure();
  }
}

let user1 = {
  name : 'Abhinav',

  success: function(){
    console.log(`${this.name} logged in`)
  },

  failure: function(){
    console.log(`${this.name} logged in`)
  },

  login(result){
    console.log(this.name + (result ? 'loggedIn': 'loggedOut'))
  }
}

checkPassword(user1.success.bind(user1), user1.failure.bind(user1))
checkPassword(user1.login.bind(user1,true), user1.login.bind(user1,false))

const ape = '45';
console.log('hi ',this.ape); //undefined because it is not in global object , it is in script

//call,apply and bind polyfils

let object1 = {
  age : 37,
  printAge: function(ageType){
    console.log(`${this.age} is a ${ageType}`);
  }
}

let object2 = {
  age : 89
}

object1.printAge.call(object2,'oldAge');

Function.prototype.myCall = function(context={},...args){
  if( typeof this !== 'function'){
    throw new Error(this +' is not a callable');
  }
  else {
  console.log(this);
  context.fn = this;
  context.fn(...args)
  }
}

object1.printAge.myCall(object2,'oldAge');

//polyfill for apply
Function.prototype.myApply = function(context={}, ...args){
  if( typeof this !== 'function'){
    throw new Error(this +' is not a callable');
  }
  else {
    console.log(this);
    context.fn = this;
    context.fn(...args)
  }
}

object1.printAge.apply(object1,['middleage']);

let bindex = object1.printAge.bind(object2);

//polyfill for bind
Function.prototype.myBind = function(context = {}, ...args1) {
  if (typeof this !== 'function') {
    throw new Error(`${this} is not a callable function`);
  }

  const fn = this;

  return function(...args2) {
    console.log('this is a bind polyfill');
    const mergedArgs = args1.concat(args2);

    return fn.apply(context, mergedArgs);
  };
};

const bindex2 = object1.printAge.myBind(object2, 'dotin');
bindex2('oldAge');

//arguments is a array like object accesible inside functions that contains the values of the arguments passed to that function




