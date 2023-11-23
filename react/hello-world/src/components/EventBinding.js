import React, { Component } from 'react'

export class EventBinding extends Component {

    constructor(){
        super();
        this.state= {
            message : 'Hello'
        }
        //  this.clickHandler = this.clickHandler.bind(this); //gives context to click handler
    }

    // clickHandler(){
    //     this.setState( {
    //         message : 'Good bye'
    //     })
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState( {
            message : 'Good bye'
        })
        console.log(this);
    }


  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>

        {/* <button onClick={this.clickHandler.bind(this)}>Click here</button>  //Approach 1 */}

         {/* <button onClick= { () => this.clickHandler()}>Click Here</button> //Approach 2 , parenthisis occurs because we eventually call and return itself */}

         {/* <button onClick={this.clickHandler}> Click here</button>  */}


      </div>
    )
  }
}

export default EventBinding
