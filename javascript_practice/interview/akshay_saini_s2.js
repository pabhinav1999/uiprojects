// In this file we do have complete implementation of call back hell , inversion of contro

// call back hell  or pyramid of doom

/* we have a e commerce system where we do have multiple apis such as createcard,payment,ordersummary and update wallet
  these are dependent on each other */


var cart = ["shoes"];

//e commerce handling ystem

// createCart(cart, function(orderId){
//     paymentProcess(orderId, function(paymentInfo){
//         orderSummary(paymentInfo, function(payment){
//             updateWallet(payment)
//         })
//     });  //here we have given total control to createcart method which may be coming extrenally, or called twice
// })

//If we observe the above criteria , we can say that the code is unmaintainable and unreadable and we lost control of that

// to resolve these issue or solve call back hell, promises are introduced
// Promise is an object which is expected after an async operation

//Promise has two parts, consumer and producer
// producer part

// const pr = createCart(cart);
// pr.then(function(orderId){
//     return paymentProcess(orderId);
// }).then(function(paymentInfo){
//     console.log("payment succesful");
// })

//consumer part
// const CRIC_BUZZ = "https://www.cricbuzz.com/";
// const pr = fetch(CRIC_BUZZ);
// console.log(pr);
// pr.then(function(){
//     console.log("promise called")
// })

//lets have consumer part and producer part

//producer part generates a custom id which we will use to resolve
//handle errors gracefully

 function createCart(cart){
    const new_pr = new Promise(function(resolve,reject){
        if(validateCart(cart)){
            setTimeout(()=>{
                console.log("12345 and I am resolving");
                resolve("12345")
            },3000)
        }
        else {
            const new_err = new Error('Cart is invalid');
            reject(new_err);
        }
    })
    return new_pr;
 }

 function validateCart(cart) {
    if(cart.length >2 ){
        return true;
    }
    else {
        return false;
    }
 }

 function paymentProcess(orderId){
    return new Promise((resolve,reject) => {
        resolve("done");
    })
 }

 //take the chain part
 createCart(cart).then( function(orderId){
    console.log("create card returned an order "+orderId);
    return paymentProcess(orderId);
 }).catch(function(error){
    console.log(error);
 }).then(function( status){
    console.log(status);
 });

 //catch catches the whole piping data and throws error if we have error in the above promises
 //thats all about promises
 // there is also a lecture on prototype and prototype inheritance
 // lets say a arr, when we call it.. it has many inbuilt properties coming as inherited
 //it is because it attaches our methods and al;so protoype methoid

 let arr = [1,2,3,4,5];
 console.log(arr.__proto__); // 
 console.log(Array.prototype); // line no 97 and 98 are equal

 console.log(arr.__proto__.__proto__);

 let object1 = {
    firstName : "Abhinav",
    place: "hyderabad",
    printFullInfo: function printFullInformation(){
       console.log(this.firstName +" "+this.place);
    }
 }

 let object2 = {
    firstName : "Akshay"
 }

 //object1.printFullInfo.call(object2); call
  
 //this should not be done in rela life
//  object2.__proto__ = object1;  //dangerous piece of code
//  object2.printFullInfo();

 // this is called prototypal inheritence
