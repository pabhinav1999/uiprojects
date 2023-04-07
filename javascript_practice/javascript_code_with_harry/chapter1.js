// 1.Create a varaible of type string and try to add a number to it

let a = "Abhinav";
a = 24;
console.log(a);

//2.Use typeof operator to find the datatype of string in last question

console.log(typeof a );

//3.Create a constant object in a javascript,.Can you change it to hold a number later

const obj = {
    "name":"Abhinav",
    "age":24
}

//obj = 38;
console.log(obj);

//4.try to add a new key to constant object in problem3,were you able to do it

obj["place"] = "Hyderabad";
console.log(obj);

//5. Write a js program to create a word meaning dictionary of 5 words

const meaning = {
    "enjoyed":"Get joy or pleasure from",
    "wonderful":"very good",
    "thinning":"making or becoming thin",
    delighted:"very pleased",
    "company":"A friend or friends"
}

console.log(meaning["delighted"]);
console.log(meaning.company);


