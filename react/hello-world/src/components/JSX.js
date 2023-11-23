import React from "react";

const JSX = () => {
    // return (
    //     <div>
    //         <h1>This is JSX code snippet</h1>
    //     </div>
    // )  
    // with jsx

    return React.createElement('div',{ id:'hello', className:'hello1'},React.createElement('h1',null,'This code is without jsx'))  //syntax without jsx which seems 
    //to be complex
}

export default JSX;
