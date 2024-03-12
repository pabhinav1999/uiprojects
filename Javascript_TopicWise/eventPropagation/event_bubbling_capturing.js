/* Event bubbling

 document.querySelector('#grandparent').addEventListener('click',()=>{
    console.log('grand Parent clicked');
})

document.querySelector('#parent').addEventListener('click',()=>{
    console.log('parent clicked');
})

document.querySelector('#child').addEventListener('click',()=>{
    console.log('child clicked');
})

*/

/* Event capturing

document.querySelector('#grandparent').addEventListener('click',()=>{
    console.log('grand Parent clicked');
}, true)

document.querySelector('#parent').addEventListener('click',()=>{
    console.log('parent clicked');
}, true)

document.querySelector('#child').addEventListener('click',()=>{
    console.log('child clicked');
}, true)

*/


/* Mix of event capturing and bubbling 
document.querySelector('#grandparent').addEventListener('click',()=>{
    console.log('grand Parent clicked');
}, false)

document.querySelector('#parent').addEventListener('click',()=>{
    console.log('parent clicked');
}, true)

document.querySelector('#child').addEventListener('click',()=>{
    console.log('child clicked');
}, false)

*/

/*  Mix od event capturing and event stop propagation
Eg: 1
document.querySelector('#grandparent').addEventListener('click',()=>{
    console.log('grand Parent clicked');
}, false)

document.querySelector('#parent').addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('parent clicked');
}, true)

document.querySelector('#child').addEventListener('click',()=>{
    console.log('child clicked');
}, false)

output is parent clicked  when clicked on child*/

/* Eg2 
document.querySelector('#grandparent').addEventListener('click',()=>{
    console.log('grand Parent clicked');
}, false)

document.querySelector('#parent').addEventListener('click',(e)=>{
    console.log('parent clicked');
}, true)

document.querySelector('#child').addEventListener('click',(event)=>{
    event.stopPropagation();
    console.log('child clicked');
}, false)


output is parent clicked followed by child clicked
*/

