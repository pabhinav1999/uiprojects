let counter = 0;


const throttleClickfor1s = function(fn,delay){
    let fnInProgress = false;
    return function() {
        let context = this;
        let args = arguments
        if(!fnInProgress){
         fn.apply(context,args);
         fnInProgress = true;
        setTimeout(()=>{
         fnInProgress = false;
        }, delay)
    }
    }
}



function getDataOnClick(category) {
    console.log('got data after click'+category, counter++)
}

const getDataAfterPause = throttleClickfor1s(getDataOnClick, 1000);
