// // The code snippet below is synchronous. It calls callback1 one time and callback2 three times. 
// // You must modify this code to make it asynchronous with the following rules:

// function job(callback1, callback2) {
//     setTimeout(callback1,2000);
//     let count = 0;
//     let intervalId = setInterval(()=>{
//         callback2();
//         count++;
//         if(count === 3)
//         clearInterval(intervalId);
//     },1000);
 
// }

// let callback1 = function() {
//     console.log('Hey I am callback1');
// }

// let callback2 = () =>{
//     console.log("Hey I am callback2");
// }

// job(callback1,callback2);

// //The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
// // The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data

// const newPr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve('Hello World');
//     },2000)
// })

// newPr.then((reolvedValue)=>{
//     console.log(reolvedValue);
// })

// // Your function must always return a promise
// // If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// // If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// // If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

// function sendData(data){
//     return new Promise((resolve,reject)=>{
    
//         if(isNaN(data)){
//             const new_err = 'error'
//             reject(new_err);
//         }
//        else  if(data % 2 === 1){
//             setTimeout(()=>{
//                resolve("odd")
//             },1000);
//         } else{
//             const numberType = 'even'
//             setTimeout(()=>{
//                 reject(numberType);
//             },2000);
//         }
//     })
// }

// sendData(4).then((value)=>{
//     console.log(value);
// });


function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(false);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);
});

//success,error,error caught


