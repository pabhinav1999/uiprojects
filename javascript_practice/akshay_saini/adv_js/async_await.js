
// const p1 = new Promise ((resolve,reject) => {
//     resolve('Promise is fulfilled');
// })

// //async always returns a promise 
// //await is used only inside async functions 
// // it is used to handle promises
// async function a() {
//   const val = await p1;
//   console.log(val);
//   return "hello";
// }

// a();
// console.log(a());

//difference between handling promises with async await and normal older way

//older way of handling promises

// const p1 = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//       resolve('old promise is fulfilled');
//     }, 10000);
// })

// function getData() {
//     //javascript engine seems to be not waiting
//     p1.then((res) => {
//         console.log(res);
//     })
//     //this line printed first
//     console.log('Namaste js from old way');
// }

// getData();

// new way of handling promises
// const p1async = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//       resolve('new promise is fulfilled');
//     }, 10000);
// })

// async function getNewData() {
//     //javascript engine seems to be  waiting
//     const val = await p1async;
//     console.log(val);
//     //this line not  printed first
//     console.log('Namaste js from old way');
// }

// //throeroetically getNerwData function is suspended from call stack paving way for another things, after fulfilling the await 
// // then it will again make its way into call stack

// getNewData();

//complex scenarios

// const p1async = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//       resolve('new promise p1 async is fulfilled');
//     }, 5000);
// })

// const p2async = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//       resolve('new promise p2 async is fulfilled');
//     }, 6000);
// })

// async function getDataOfPromises(){
//     console.log("Hello from async function");

//     const val1 = await p1async ;
//     console.log(`${val1}`);
//     console.log('.......');

//     const val2 = await p2async ;
//     console.log(`${val2}`);
//     console.log('.......');
// }

// getDataOfPromises();

//Observe the call stack with above code snippet

//lets see some real world examples

//We will be using github api to fetch

const API_URL = "https://api.github.com/users/pabhinav1999";

// async function getGithubDetails() {
//   try {
//    const data = await fetch(API_URL);
//    const dataInJson = await data.json();
//    console.log(dataInJson);
//   }
//   catch(err) {
//     console.log("hello this is a invalid url");
//   }
// }

// getGithubDetails();


async function getGithubDetails() {
     const data = await fetch(API_URL);
     const dataInJson = await data.json();
     console.log(dataInJson);
}

getGithubDetails().then((res)=>{
    console.log(res)
}).catch((err) =>{
    console.log("Hello there is a error");
})

//async and await are just syntactic sugars  

//there are two ways to handle errors in async and await

//use try and catch
// or promise chaining for fn















