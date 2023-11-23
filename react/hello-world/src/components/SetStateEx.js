import React, { Component } from "react";

class SetStateEx extends Component {
    constructor(props){
       super(props);
       this.state = {
        count : 0
       }
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment(); 
    }
  
    increment(){
    //  this.state.count = this.state.count + 1;
    //  console.log(this.state.count);

    //    this.setState({
    //     count: this.state.count + 1
    //    })
    //    console.log(this.state.count);


    // this.setState({
    //     count : this.state.count + 1
    // },()=>{
    //    console.log(`Setting state is completed ${this.state.count}`)  ;
    // })
     
    // this.setState((prevState,props) => {
    //     return {
    //         count: prevState.count + 1   //always use the previous state
    //     };
    // })

    }

    render(){
        return (
            <div>
                <h1>Count is - {this.state.count}</h1>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default SetStateEx