// // Q1.Difference between synchronous and asynchronous code

// console.log('start synchronous');
// console.log('Synchronous code executed');
// console.log('stop synchronous');

// console.log('start Asynchronous');

// function printMessage(username){
//     setTimeout(()=>{
//        return `Subscribe to ${username}`
//     }, 1000)
// }

// let message = printMessage('Roadside coder'); 
// console.log(message); // prints undefined in console
// console.log('stop Asynchronous')


// //Q2. How to deal with the above scenario. Use call backs and observe call back hell

// console.log('start callback');

//  function asyncprintMessage(username , cb){
//     setTimeout(()=>{
//         cb(username);
//     }, 1000)
// }

// function asynclikeTheVideo(videoTitle , cb){
//     setTimeout(()=>{
//         cb(videoTitle);
//     }, 500)
// }

// function asyncShareVideo(cb){
//     setTimeout(()=>{
//         cb();
//     }, 2000)
// }


// asyncprintMessage('road side coder', function(message){
//     console.log( `Susbscribe to ${message}`) ;
//     asynclikeTheVideo('JS interview questions',function(videoTitle){
//         console.log(`Liked the video ${videoTitle}`);
//         asyncShareVideo(function(){
//             console.log('shared the video');   //Example of a call back hell
//         })
//     })
// })

// console.log('stop call back but it is not last statement');

// //call back hell

// //Promise chaining

//  function printMsgProm(message){
//     return new Promise((resolve,reject) =>{
//         const result = true;
//         if(result){
//             setTimeout(()=>{
//                resolve(`Subscribe to ${message} through promise`);
//             }, 1000)
//         }
//         else {
//             reject(new Error(`Please Subscribe as you havent subscribed yet!!`))
//         }
//     })
//  }

//  function likeTheVideoProm(videoTitle){
//     return new Promise((resolve,reject) =>{
//         const result = true;
//         if(result){
//             setTimeout(()=>{
//                resolve(`Liked the video ${videoTitle} through promise`);
//             }, 1000)
//         }
//         else {
//             reject(new Error(`Please Like as u havent likedd yet`));
//         }
//     })
//  }

//  function shareVideo(){
//     return new Promise((resolve,reject) =>{
//         const result = true;
//         if(result){
//             setTimeout(()=>{
//                resolve(`Shared the video through promise `);
//             }, 1000)
//         }
//         else {
//             reject(new Error(`Please Share the video`));
//         }
//     })
//  }

//  printMsgProm('RoadSidecoder').then((data)=>{
//     console.log(data);
//     return likeTheVideoProm('JS Interview');
//  }).then((data)=> {
//     console.log(data);
//     return shareVideo();
//  }).then((data)=>{
//     console.log(data);
//  }).catch((err)=>{
//     console.log(err);
//  })

 //output q1
 console.log('q1start');

 const promq1 = new Promise((resolve,reject)=>{
    console.log(1);  //this statement is a sycnhronous code part when promise is initialising
    resolve(2);  // remember resolve is not a return statement 
    console.log(3) //code still executes after resolve statement
 }) 

 promq1.then((data)=>{
    console.log(data);  //.then this is asynchronous part /operation
 })

 console.log('q1end');

 //output q2
 console.log('q2start');

 const promq2 = new Promise((resolve,reject)=>{
    console.log(1); 
    console.log(3);  //what if resolve statement is not there
 }) 

 promq1.then((data)=>{
    console.log(data);  //if resolve statement is not there , it will not go into then block
 })

 console.log('q2end');

 //output q3
 console.log('q3 start');

 const fn = () =>
    new Promise((resolve,reject) =>{
        console.log(1);
        resolve('success');
    });
 

 console.log('middle');

 fn().then((data)=>{
    console.log(data);
 })

 console.log('q3end');

 //output q4

 console.log('q4 start');
 function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true); //resolve('success');

promise
    .then(function (data) {
        console.log(data);
        return job(true);
    })
    .then(function (data) {
        if (data !== 'victory') {
            throw 'Defeat';
        }
        return job(true);
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
        return job(false);
    })
    .then(function (data) {
        console.log(data);
        return job(true);
    })
    .catch(function (error) {
        console.log(error);
        return 'Error Caught';
    })
    .then(function(data){
        console.log(data);
        return new Error('test');
    })
    .then((data)=>{
        console.log('Success:',data.message)
    })
    .catch((data)=>{
        console.log('Error:',data.message)
    })

console.log('q4 end');

//Key learining is that whenever it is throw , then its meaning is rejected and goes into catch block

//q5
console.log('q5 start');

const firstPromise = new Promise((resolve,reject)=>{
    resolve('first Promise !!')
})

const secondPromise = new Promise((resolve,reject)=>{
    resolve(firstPromise);
})

secondPromise.then((res)=>res).then((data)=>{
    console.log('first promise invoked through second promise');
});

//q6
console.log('q6 start');
console.log('rewrite the below code using async await');

function loadJson(url){
    return fetch(url).then((response)=>{
        if(response.status === 200){
            return response.json();
        }
        else {
            throw new Error(response.status);
        }
    });
}

loadJson('https://api.github.com/users/pabhinav1999').catch((err)=>{
    console.log(err);
})

//rewriting

async function loadJson(url){
    const response = await fetch(url);
    if(response.status === 200){
        return response.json();
    }
    else {
        throw new Error(response.status);
    }
}

console.log('q6 end');

//q7 promise polyfill to be tried by yourself
