
// lets observe a flipkart ui page,there we have a search bar
//ope network tab and observe autosuggest apis whenever you serach for product, we can observe that it does not call api for each key stroke
//If there is a time gap between the key strokes then only it searches

// let us implement it here
let counter = 0;
const getData = () => {
    //Fetched data
    console.log("Fetching Data...",counter++)
}

//there exists a better function where we can stop immediate key strokes
const betterFunction = doSomeMagic(getData,3000);
const doSomeMagic = function(fn,d){
    let timer;
    return function(){
        clearInterval(timer);
        timer = setTimeout(()=>{
            let context = this;
            let args = arguments;
            fn.apply(context,args);
        },d)
    }
   
}
//dont worry you can do it