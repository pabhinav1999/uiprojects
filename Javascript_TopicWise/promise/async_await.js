//async always returns promise 
// If the function is returning number or string, it always wraps it in promise and returns

async function asyncReturnValue() {
    return 1;
}

const prom = asyncReturnValue();
prom.then((data) => console.log('asyncReturnValue is',data)); //using then

async function asyncReturnPromise(){
    return  new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve('async function with return promisecalled');
        }, 10000)
    });
}

console.log('print async fn output',asyncReturnPromise());
asyncReturnPromise().then((data)=> {console.log('asyn fn with return promise output is ',data)});

async function asyncNotReturnAnything(){
    let a = 10;
    // console.log(a);
}
console.log('print async not return output',asyncNotReturnAnything());

//using await 
//handle promises before async await

//after async await

const promAwait = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('async function handled promise with await');
    },3000)
})

async function handlePromiseWithAwait(){
    console.log(' function called');
    const val =  await promAwait; //it always returns resolve value to it
    console.log('resolved value with await after 3s is ',val); //this line below await  executes after await finishes
}

handlePromiseWithAwait();

//What if await called 2 times
const promCalled2Times = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve('resolved prom after 5 s')
    }, 5000)
})
async function handleTwoPromises(){
    console.log('Two promises called');

    const val1 = await promCalled2Times;
    console.log(val1);
    console.log('Namaste1');

    const val2 = await promCalled2Times;
    console.log(val2);
    console.log('Namaste2');
}

handleTwoPromises();
//two promises resolves themselves simultaneously

const prom7s = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('resolve prom after 7s');
    }, 7000)
})

const prom14s = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('resolve prom after 14s');
    },14000)
})

const prom20s = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('resolve prom after 20s');
    },20000)
})
 
async function handleMultiplePromisesWithDifferentResolveTimes(){

    console.log('Handling multiple promises through await with different permutations and combinations');

    // const val1 = await prom7s;
    // console.log('Namaste 7s prom',val1);

    // const val2 = await prom14s;
    // console.log('Namaste 14s prom',val2);

    // const val3 = await prom20s;
    // console.log('Namaste 20s prom',val3);

   // o/p
   /* after 7s prom7s prints , further 7s prom14s, further 6s prom20s */

//    const val3 = await prom20s;
//    console.log('Namaste 20s prom',val3);

//    const val1 = await prom7s;
//    console.log('Namaste 7s prom',val1);

//    const val2 = await prom14s;
//    console.log('Namaste 14s prom',val2);


  //o/p
  /* after 20s prom20s, prom7s , prom14s */

  const val1 = await prom7s;
  console.log('Namaste 7s prom',val1);
  
   const val3 = await prom20s;
   console.log('Namaste 20s prom',val3);

   const val2 = await prom14s;
   console.log('Namaste 14s prom',val2);

   //how call back behaves refer to notes
 
}

handleMultiplePromisesWithDifferentResolveTimes();

//real world examples

//understand how fetch works

// https://api.github.com/users/pabhinav1999

const API_URL = 'https://api.github.com/users/pabhinav1999';


async function printIdOfGitHubUser(){
    const responseStream = await fetch(API_URL);  //fetch returns a promise with readable stream which can be further converted to data.json through promise
    const responseJson = await responseStream.json();
    console.log(`id of user  is ${responseJson.id}`);
}

//another way to retrieve 
fetch(API_URL).then((data) => { return data.json()}).then((data)=> console.log(data.id));

printIdOfGitHubUser();

//error handling 
//u can use normal then catch or try catch as below

const  Invalid_API_URL = 'mlsamdla';

async function printNameOfGitHubUser(){
    try{
    const responseStream = await fetch(Invalid_API_URL);  //fetch returns a promise with readable stream which can be further converted to data.json through promise
    const responseJson = await responseStream.json();
    console.log(`id of user  is ${responseJson.name}`);
    } 
    catch(err){
       console.log(err);
    }
}

//or we can use normal 
printNameOfGitHubUser().catch((err) => { console.log(err)});


// behind the scenes async await uses promises but differently



