//output 1

const user1 = {
    firstName: 'Abhinav ',
    getName(){
        const firstName = 'Abhinav Kumar !';
        return this.firstName
    }
}

console.log(user1.firstName);

//output 2 
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user2 = makeUser();
  
  console.log( typeof user2.ref.name ); // What's the result?

  //modify the above code to make accesible the name John

  //question 3

  function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user3 = makeUser();
  console.log(user3.ref().name)

  //outptu4

  const user4 = {
    name : 'Raja',
    logMessage: function() {
        console.log(`hi to ${this.name}`)
    }
}

// setTimeout(user4.logMessage(), 1000);

//here user4.logMessage whole function definition  is copied and then used as a callback hence this is not referred

//to make it work , modify the code as below

setTimeout(function () {
   user4.logMessage();
}, 1000);

//question 5 

// create a calculator

let calculator = {
    read(){
        this.a = +prompt('a =',0)
        this.b = +prompt('a =',0)
    },

    sum() {
        console.log(`sum is ${this.a + this.b}`);
    },

     mul(){
        console.log(`mul is ${this.a * this.b}`);
     }
}



calculator.read() ; //reads two numbers
calculator.sum(); //adds the read two numbers
calculator.mul(); //multiplies them

//output 7
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method(callback) {
    callback();
  }
};

object.method(callback, 1, 2);

//this is equal to global object if it is a regular function invocation