document.querySelector('div').addEventListener('click',(e)=>{
   console.log('current element is =',e.currentTarget);
   console.log('clicked element is =',e.target);
   console.log(this.target);
})

document.querySelector('form').addEventListener('click',(e)=>{
    // alert('form is clicked');
    console.log('current element is =',e.currentTarget);
    console.log('clicked element is =',e.target);
    console.log(this.target);
})

document.querySelector('button').addEventListener('click',(e)=>{
    // alert('button is clicked');
    console.log('current element is =',e.currentTarget);
    console.log('clicked element is =',e.target);
    console.log(this.target);
    e.preventDefault();
})

/* when button is in form and if we have not mentioned any type , it assumes as submit button and refreshes console itself
   Hence event.preventDefault is used */

   /* event delegation */

   document.querySelector('.grid-container').addEventListener('click', (e) => {
      
      if(e.target.tagName === 'SPAN' ){
         window.location.href= '/'+e.target.id;
      }
      else {
        const closestSpan = e.target.closest('SPAN');
        window.location.href= '/'+closestSpan.id;
      }

   })

   /* when we click on negative space around (grey area) the modal should be closed */
   
   document.querySelector('.open-modal').addEventListener('click', () => {
     openModalContainer(true);
   })

   document.querySelector('.modal-container').addEventListener('click', (e) => {
    console.log(e.target.className);
     if(e.target.className !== 'modal'){
      openModalContainer(false);
     }
   })

   function openModalContainer(toggle){
    const container = document.querySelector('.modal-container');
    container.style.display = toggle ? 'flex':'none'
   }


