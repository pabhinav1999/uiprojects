import React, { Component } from "react";

class ClassProps extends Component {
  render(){
    return <h1> Today is {this.props.day} of {this.props.month}</h1>
  }
}

export default ClassProps;