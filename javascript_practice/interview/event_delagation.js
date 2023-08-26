// event delegation is a concept of having only limited event listeners instead of having many event listeners
//lets say a div of categories contain many prodycts such as laptops, cameras , and all other stuffs
// If we want to navigate to any of the product , brutal way is to attach a click listener and navigate that page through location.href

//but in a evcent delegation we will take not of that target element and act upon accordingly

//example
// more importantly it is possible because of evetn bubbling

// document.querySelector('#categories').addEventListener('click',(event)=>{
//     // if(event.target)
//   //  console.log(event);
//   //we can take action based on click event for particular target
//   if(event.target.id === 'laptops')
//   {
//     window.location.href = "/laptops"
//   }
//    console.log('child event clicked');
// })
//another great example can be done by using forms for adding custoom attribute

document.getElementsByTagName('form')[0].addEventListener('keyup',(event)=>{
   if( event.target.dataset.uppercase!=undefined){
    console.log(event.target.value);
    event.target.value = event.target.value.toUpperCase();
    // event.target.value.toUpperCase();
   }
})

//pros and cons of event delegation
// pros are memory and handling

// not all events have event delegation / event bubbling we should handle them

