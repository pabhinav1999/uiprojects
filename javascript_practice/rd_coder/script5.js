//currying is the phenomenon in functiones where particular
//  function takes a single parameter returning a new innner function which is expected to take otehr paarmeter

// function (a,b )  --> function(a)(b)

function sum(a,b){
    console.log(a+b);
}

sum(5,6);

function sum_curry(a){
    return function (b){
        console.log('curried');
        console.log(a+b);
    }
}

sum_curry(5)(6);

//question 1 
//implement sum(2)(6)(1)

function sum1(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(sum1(2)(6)(1));

//question 2 
//evalute('sum')(4)(2)
//evaluate('multipl(y')(4)(2)
//evaluate('divide')(4)(2)
//evalaute('substract')(4)(2)

function evaluate(operation){
        return function (a){
            return function (b){
              if(operation === 'sum')
              return a+b;

              else if(operation === 'multiply')
              return a*b;

              else if(operation === 'divide')
              return a/b;

              else 
              return a-b;
            }
        }
}

console.log(evaluate('sum')(12)(2));
console.log(evaluate('multiply')(12)(2));
console.log(evaluate('divide')(12)(2));
console.log(evaluate('substract')(12)(2));

let mul = evaluate('multiply'); //can re use this function many times
console.log(mul(5)(6));
console.log(mul(6)(7));

// Infinfite currying 


function sumNParams(a){
    return function (b){
        if(b){
            console.log(a);
            console.log(b);
           return sumNParams(a+b) ;
        }
        else 
            return a;
        }
 }

//  console.log(sumNParams(1));
  console.log(sumNParams(1)(2));
//  console.log(sumNParams(1)(2)(4)(5)());
//Currying vs partial application

function mult(a){
    return function(b,c){
        return a * b * c;
    }
}

let x = mult(10);
console.log(x(5,6));

console.log(mult(3)(4,5));

//Manipulation of DOM using currying





