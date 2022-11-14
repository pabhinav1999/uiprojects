const alphabet = ["A", "B", "C", "D", "E"];
const numbers = [1, 2, 3, 4, 5, 6];

[a, , c, ...rest] = alphabet;
console.log(a);
console.log(c);

const newArray = [...alphabet, ...numbers];
console.log(newArray);

const person1 = {
  name: "Abhinav",
  age: 23,
  address: {
    city: "Hyderabad",
    state: "Telangana",
  },
};

const person2 = {
  name: "Abhilash",
  age: 21,
  address: {
    city: "Mumbai",
    state: "Maharashtra",
  },
};

const { name, age, ...rest2 } = person1;
const { name: firstName = "john", favouriteFood = "Rice", ...rest1 } = person2;
console.log(rest2);
console.log(rest1);
console.log(person2);

const person3 = {
  name: "Abhinav",
  age: 23,
  address: {
    city: "Mumbai",
    state: "Maharashtra",
  },
};

const person4 = {
  name: "Abhilash",
  age: 21,
};

const person5 = { ...person3, ...person4 }; //overwrites contents in peron 3

console.log(person5);

function printPerson(person) {
  console.log(`Name is ${person.name} and age is ${person.age} `);
}

printPerson(person5);

//using destructuring

function printPersonDestr({ name, age }) {
  console.log(`Name is ${name} and age is ${age}`);
}
printPersonDestr(person1);
