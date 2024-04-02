//call method

let person1 = {
    name : 'Abhinav',
    age: 25,
    street: 'Hanuman Nagar',
    printDetails: function(){
        console.log(`Name of the person is ${this.name} and age is ${this.age}`);
    }
}

let person2 = {
    name : 'Sachin Tendulkar',
    age: 52,
    street: 'MGRoad'
}

let person3 = {
    name : 'Ashish',
    age: 42,
    street: 'Regiv'
}

//want to print details of person2 but by using person1 method

person1.printDetails.call(person2);

//call method with arguments
function printAddress(hometown, state){
    console.log(`${this.street} is from ${hometown} of ${state}`);
}

printAddress.call(person1,'Hyderabad','Telangana');4
//apply is same but will pass arguments as an array
printAddress.apply(person2,['Mumbai','Maharasthra']);

//bind method stores the copy of the function but not immediately calls it

let printAddressOfStreet = printAddress.bind(person3);
console.log(printAddressOfStreet);
printAddressOfStreet('Dehradun','Uttarakhand');

//polyfill for a  bind */

let street1 = {
    street: 'Veer Savarkar'
}


Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.slice(1)
    console.log(args[0]);
    return function(...args2){
       obj.apply(args[0],[...params,...args2]);
    }
}

let printAddressOfStreetMyBind = printAddress.myBind(street1,'PortBlair');
printAddressOfStreetMyBind('Andaman');






