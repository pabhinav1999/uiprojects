const p1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
      // resolve('p1 success');
       reject('p1 failed after 3s');
    },3000)
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve('p2 success');
     // reject('p2 failed');
    },1000)
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(()=>{
      //  resolve('p2 success');
      reject('p3 failed');
    },2000)
})

//Promise.all (failfast  case)

console.log('promise all success case')
Promise.all([p1,p2,p3]).then((successArray) => {
    console.log('Promise.all success',successArray);
}).     //returns array after all promises resolved succesfully after 3s
catch((failedPromise) => {
    console.error('promise.all failed', failedPromise)
})   //returns the first  rejected promise msg  irrespective of all other succesful promises


//Promise.allSettled(waits for all promises)
Promise.allSettled([p1,p2,p3]).then((successArray)=>{
    console.log('promise.allSettled', successArray);
})  //same as promise.all success case but in case of failed it will not go into catch block as it returns the mix of array of of successful and failure messaged

.catch((err)=>{ 
    console.log(err); 
})

//Promise.race waits only for first settled promise(either resolved or rejected and returns the value)
Promise.race([p1,p2,p3]).then((firstValue)=>{
    console.log('Promise race first settled value is ',firstValue);
}).catch((err)=>{
    console.log('Promise race failed',err);
})

//Promise.any waits for the first succesfully resolved promise and if all the promises fails it returns an aggregated error object
Promise.any([p1,p2,p3]).then((firstSuccessPromise)=>{
    console.log('Promise.any first success',firstSuccessPromise);
}).catch((err)=>{
    console.error('aggregated errors',err);
})



