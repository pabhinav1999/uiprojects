import React, {Component} from "react";

class ConditionalRendering extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn :true
        }
    }

    render(){
       
        // return (
        //     <div>
        //         <div>Welcome to user</div>
        //         <div>Welcome to guest</div>
        //     </div>
        // )

        // if(this.state.isLoggedIn) {
        //     return <div> Welcome to User</div>
        // }
        // else {
        //     return <div> Welcome to guest</div>
        // }    //if else doesnt work inside JSX
        
        // let message ;
        // if( this.state.isLoggedIn){
        //     message = <div>Welcome to User</div>
        // } else {
        //     message = <div>Welcome to guest</div>
        // }  
        // return (<div> {message}</div>) ;//use element varaibles

        //better approach is to use ternary operators because they do work inside jsx
        //  return ( this.state.isLoggedIn ? <div> Welcome to user</div> :  <div> Welcome to guest</div> )

        //short circuit operator to display anything or none
         return this.state.isLoggedIn && <div>Welcome to user</div>

    }
}

export default ConditionalRendering;