import React from "react";



const FunctionalProps = (props) => {
    return (
    <div>
        {/* props are given as atrributes in App.js, we will retrieve props here */}
        <h1> Hello {props.name} from {props.place}</h1>
        <p>  {props.children} </p>  
        {/* Child content can be accesed through props.children and known properties can be accesed through their key values */}
    </div> 
    )

}

export default FunctionalProps;

