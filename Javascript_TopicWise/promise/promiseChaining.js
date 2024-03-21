  const cart = ['shoes','kurtas','pyjamas'];
 //const cart = [];

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

function orderSummary (paymentInfo){
    return new Promise((resolve,reject)=>{
        if(paymentInfo.payment > 200)
        resolve(paymentInfo.payment * 2);
       else {
        reject(new Error('Order summery failed'))
       }
    })
}

function updateWallet(invoice){
    return new Promise((resolve,reject)=>{
        if(invoice > 0){
            console.log('update wallet balance is', 1000 - invoice);
        }
        else {
            console.log('update wallet balance is ', 1000)
        }
        resolve(true);

    })
}


function validateCart(cart){
    return cart.length > 0 ? true : false ;
}

// consumer part

createOrder(cart).then(function (orderId){
  return orderId;
}).
catch((err)=>{
  console.log('order failed, we will re-place the order');
})
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function (paymentInfo){
    return orderSummary(paymentInfo)
})
.catch((err)=>{
    console.log('payment unsucceful');
 })
 .then((invoice) => updateWallet(invoice))
 .then((data)=>{
    console.log('your order execution is finished');
 })






