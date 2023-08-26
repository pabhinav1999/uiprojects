
// document.querySelector('#grandParent').addEventListener('click',()=>{
//    console.log('grand parent clicked');
// })
// document.querySelector('#parent').addEventListener('click',()=>{
//    console.log('parent clicked');
// })
// document.querySelector('#child').addEventListener('click',()=>{
//    console.log('child clicked');
// })

//there are two scenarios event bubbling and event capturing

//default case is event bubbling that is usecapture which is third argument will be false

// output in case of event bubbling
//when we click on child then child  --> parent --> grandParent
// when we click on grandparent --> grand parent is clicked

//although they will complete a cycle after event bubbling ..they do event capturing too

// use case of use capture
// document.querySelector('#grandParent').addEventListener('click',()=>{
//     console.log('grand parent clicked');
//  },true)
//  document.querySelector('#parent').addEventListener('click',()=>{
//     console.log('parent clicked');
//  },true)
//  document.querySelector('#child').addEventListener('click',()=>{
//     console.log('child clicked');
//  },true)

 //you can use mix of usdecapture arguments can give tru oe can give false

//  document.querySelector('#grandParent').addEventListener('click',()=>{
//     console.log('grand parent clicked');
//  },true)
//  document.querySelector('#parent').addEventListener('click',()=>{
//     console.log('parent clicked');
//  },false)
//  document.querySelector('#child').addEventListener('click',()=>{
//     console.log('child clicked');
//  },true)
 //there is a stop propagation method which stops the propagation 
 //lets say if we use it in a bubbling one .. it stops after it called


 document.querySelector('#grandParent').addEventListener('click',()=>{
    console.log('grand parent clicked');
 },false)
 document.querySelector('#parent').addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('parent clicked');
 },false)
 document.querySelector('#child').addEventListener('click',()=>{
    console.log('child clicked');
 },true)
//very good 