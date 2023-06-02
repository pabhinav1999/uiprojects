console.log("har\"".length);
let friend = "Armaan Malik"
//explore includes ,startswith ,endswith methods in javascript;

console.log(friend.includes("maa"));
console.log(friend.includes("mam"));

//startswith

console.log(friend.startsWith("Arm"));
console.log(friend.startsWith("arm"));

//endswith
console.log(friend.endsWith("k"));
console.log(friend.endsWith("rmaan Malik"));

console.log(friend.toLowerCase());
//extract the amount out of string

let request = "Please give me 1000 Rs."
console.log(request.slice(15,19));

friend[3]='t';
console.log(friend);



