let a = [1,2,3,4];

console.log(a.map((a) => a * 2));

console.log(a.filter((a)=>  a > 2))

//turn an array of numbers into a long string of all those numbers

 console.log(a.reduce((acc,val)=>
    acc+=val
 ,''))

 //pollyfills for map
 Array.prototype.mymap = function(cb) {
    let temp = [];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp;
 }

 console.log(a.mymap((val)=>{
    return val * 8;
 }));

 //pollyfill for filter

 console.log(a.filter((a)=>  a > 2));

 Array.prototype.myfilter = function(cb){
    let temp = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
 }

 console.log(a.mymap((a)=> a>3));

 //pollyfill for reduce
 Array.prototype.myreduce = function(c,initialvalue){
    var accumulator = initialvalue;
    for(let i=0;i<this.length;i++){
        accumulator = accumulator ? cb(accumulator,this[i],i,this) : accumulator
    }
    return accumulator;
 }

 console.log(a.reduce((acc,val)=>{
    return acc + val;
 },0));

 //functions 

 function fundeclar(){
    //this is function declaration or function definitiion
 }

 var funcexpr = function(call){
    console.log(call);          // function without name is anonymous function
        //Anonymous fucntion can be used as callback
 }

 //first class functions are any fucntion which can be used as variable are first class functions


 function square(num){
    return num*num;
 }

 function displaySquare(fn){
    console.log("Square is "+fn(5));
 }

 displaySquare(square);

 (function double(num){
    console.log(2 * num) //Immediately invoked function
 })(7);

 for(let i=0;i<5;i++){
    setTimeout(()=>{
     console.log(i);
 },i*1000)
 }

 var addSix = createbase(6);
 addSix(10);  //returns 16
 addSix(21); //returns 27

 function createbase(a){
    return function(b){
        console.log(a+b);
    }
 }

 addSix(18,6); //function currying

 
