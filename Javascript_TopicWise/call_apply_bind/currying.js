//currying using closure
function multiply(x){
    return function(y){
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3)(5);

let multiplyByFour = multiply(9);
console.log(multiplyByFour);
multiplyByFour(4);


//currying using bind

function add(x,y){
    console.log(`add result is ${x+y} `);
}

let addCopy = add.bind(this);
addCopy(2,3);

let addCopy1 = add.bind(this,4);
addCopy1(2);

let addCopy2 = add.bind(this,7,8);
addCopy2(8,9);

