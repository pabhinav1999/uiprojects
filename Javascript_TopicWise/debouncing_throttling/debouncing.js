
let counter = 0;
function getData(){
    console.log('data called',counter++);
}



const doSomeMagic = 
function (fn, d ){
    let timer;
    return function(){
        console.log(this);
        let context = this; //doing this because to get parent context of getData fn
        clearTimeout(timer);
        timer =  setTimeout(()=>{
            console.log('setTimeout called');
            fn.apply(context);
        }, d)
    }
}

const getDataOnPause = doSomeMagic(getData,3000);
