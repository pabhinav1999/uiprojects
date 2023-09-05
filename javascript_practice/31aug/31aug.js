function a(){
    for(let i=0;i<3;i++){
        setTimeout(()=>{
          console.log(i);
        },1000)
    }
}
// 0,1,2
a();


function b(){
 for(var i=0;i<3;i++){
    function inner(i){
        setTimeout(()=>{
           console.log(i);
        },1000)
    }

 inner(i);
 }

}

//closures are used for encapsulation

function counter(){
    var _counter = 0;

    function add(increment){
        _counter+=increment;
    }

    function retrieve(){
        return _counter;
    }

    return { add,retrieve }
}

let c = counter();
c.add(5);
c.add(15);
console.log(c.retrieve());

//
let view = "Roadside coder";
function likethevideo(){
    let counter1 = 0;

    return function(){
        if(counter1 > 0){
            console.log("Already subscribed to",view);
        }
        else {

            console.log("Please subscribe to",view,view);
            counter1++;
        }
    }
    
}
let isSubscribed = likethevideo();

isSubscribed();
isSubscribed();
isSubscribed();
//currying

//object destructuring
const firstname = "Abhinav"
const place = "Hyderabad"

const user = {
    [firstname]: place
}

console.log(user);

for( key in user){
    console.log(user[key]);
}




