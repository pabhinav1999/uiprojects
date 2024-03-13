/* Example 1 
  We need to redirect page to the particular clicked category after clicking on parent
  
  We can get the target element by accesing e/event variable from cb fn of event listener*/

  document.querySelector('#categories').addEventListener('click',(e) =>{
     console.log(e);
     console.log(e.target);

     if(e.target.tagName == 'LI'){
        window.location.href = '/'+ e.target.id ;
     }
  })


/* Example 2 
   We need to add a new attribute where if we enter the input , it should print in uppercase 

   I have given a new attribute data-convToUpperCase ( always starts with data-)

   the element which has given the attribute appears in e.target.dataset 

   We can apply the attribute to any number of child elements
*/

  document.querySelector('#example2').addEventListener('keyup' , (e) => {
      console.log(e);
      console.log(e.target.dataset);
      if(e.target.dataset.convtouppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
      }
  })