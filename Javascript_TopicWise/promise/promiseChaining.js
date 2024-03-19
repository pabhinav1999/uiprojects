 const cart = ['shoes','kurtas','pyjamas'];
// const cart = [];

//Creating a promise
// this is production part

function createOrder(cart){
   const prom = new Promise((resolve,reject)=>{
     
    if(!validateCart(cart)){
        const err = new Error('Cart is not valid');
        reject(err);
    }

    else {

        const orderId = "1233445";
        setTimeout(()=>{
            resolve(orderId)
        }, 5000)
    }
   })

   return prom;
}

function proceedToPayment(orderId){
    const prom2 = new Promise((resolve,reject)=>{
        
        if(orderId){
            const paymentInfo = {
                payment: 350,
                paymentDate : '4May'
            }
            resolve(paymentInfo);
        }

        else {
            reject(new Error('Payment Failed'));
        }

    })

    return prom2;

}


function validateCart(cart){
    return cart.length > 0 ? true : false ;
}

// consumer part

createOrder(cart).then(function (orderId){
  return orderId;
}).then(function (orderId){
    return proceedToPayment(orderId);
}).then((data) => {
    console.log(data);
})






