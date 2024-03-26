// Q1.Difference between synchronous and asynchronous code

console.log('start synchronous');
console.log('Synchronous code executed');
console.log('stop synchronous');

console.log('start Asynchronous');

function printMessage(username){
    setTimeout(()=>{
       return `Subscribe to ${username}`
    }, 1000)
}

let message = printMessage('Roadside coder'); 
console.log(message); // prints undefined in console
console.log('stop Asynchronous')


//Q2. How to deal with the above scenario. Use call backs and observe call back hell

console.log('start callback');

 function asyncprintMessage(username , cb){
    setTimeout(()=>{
        cb(username);
    }, 1000)
}

function asynclikeTheVideo(videoTitle , cb){
    setTimeout(()=>{
        cb(videoTitle);
    }, 500)
}

function asyncShareVideo(cb){
    setTimeout(()=>{
        cb();
    }, 2000)
}


asyncprintMessage('road side coder', function(message){
    console.log( `Susbscribe to ${message}`) ;
    asynclikeTheVideo('JS interview questions',function(videoTitle){
        console.log(`Liked the video ${videoTitle}`);
        asyncShareVideo(function(){
            console.log('shared the video');   //Example of a call back hell
        })
    })
})

console.log('stop call back but it is not last statement');

//call back hell

//Promise chaining

 function printMsgProm(message){
    return new Promise((resolve,reject) =>{
        const result = true;
        if(result){
            setTimeout(()=>{
               resolve(`Subscribe to ${message} through promise`);
            }, 1000)
        }
        else {
            reject(new Error(`Please Subscribe as you havent subscribed yet!!`))
        }
    })
 }

 function likeTheVideoProm(videoTitle){
    return new Promise((resolve,reject) =>{
        const result = true;
        if(result){
            setTimeout(()=>{
               resolve(`Liked the video ${videoTitle} through promise`);
            }, 1000)
        }
        else {
            reject(new Error(`Please Like as u havent likedd yet`));
        }
    })
 }

 function shareVideo(){
    return new Promise((resolve,reject) =>{
        const result = true;
        if(result){
            setTimeout(()=>{
               resolve(`Shared the video through promise `);
            }, 1000)
        }
        else {
            reject(new Error(`Please Share the video`));
        }
    })
 }

 printMsgProm('RoadSidecoder').then((data)=>{
    console.log(data);
    return likeTheVideoProm('JS Interview');
 }).then((data)=> {
    console.log(data);
    return shareVideo();
 }).then((data)=>{
    console.log(data);
 }).catch((err)=>{
    console.log(err);
 })