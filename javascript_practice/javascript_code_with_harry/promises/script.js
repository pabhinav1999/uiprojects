let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(56)
    },5000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject(new Error('i am a error'));
    },5000);
})

let p3 = new Promise((resolve,reject)=>{
    reject(new Error('console error through then function'))
})

p1.then((value)=>{
    console.log(value);
})

p2.catch((error)=>{
    console.log(error)
})

p3.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})

//chaining useing then

let p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        resolve(899)
    },1500)
})

p4.then((value)=>{
    return new Promise((resolve,reject)=>{
        console.log(value);
        resolve(678)
    })
}).then((value)=>{
    console.log(value);
    return 3;
}).then((value)=>{
    console.log(value);
    console.log('we are done');
}).then((value)=>{
    console.log('no retuen value but parameter'+value)
})


const loadScript = (src) =>{
    return new Promise((resolve,reject)=>{
    let script = document.createElement('script');
    script.src = src;
    script.type="text/javascript";
    document.body.appendChild(script);
    script.onload = ()=> {
       resolve(3);
    }

    script.onerror = ()=>{
        reject(2);
    }
    })
    
}

let p5 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css");
p5.then((value)=>{
    console.log(value);
    return new Promise((resolve,reject)=>{
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@4.1.2/dist/css/bootstrap.min.css")
    }
    )
}).then((value)=>{
    console.log(value);
    loadScript("jdoskcfs");
}).catch((error)=>{
    console.log("script not found"+error);
})
 

//attaching promises in javascript

let p6 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(65);
    },3500);
})

p6.then((value)=>{
    console.log('printing value 1st time'+ value);
})

p6.then((value)=>{
    console.log('printing value 2nd time '+value);
})
