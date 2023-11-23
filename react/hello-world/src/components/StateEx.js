import React, { Component } from "react";

class StateEx extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
     }

     changeMessage(){
        this.setState({
            message: "thanks for Visiting"
        })
     }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1> 
                <button onClick={()=>this.changeMessage()}>Change Message</button>
            </div>
        )
    }
}

export default StateEx;