import  React , { Component } from "react";

class ClassClick extends Component {

    constructor(props){
        super(props);
    }
    click (){
        console.log('class event fired');
    }
    render() {
        return (
            <div>
                <button onClick={this.click}>Class Click</button>
            </div>
        )
    }
}

export default ClassClick;