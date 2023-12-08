// const heading = React.createElement(
//     "h1",
//     { id:"heading", ac:"bd"},
//     "Hello World From React!");


// //creating element is a job of core react
// // To aware react about root , first we have to assign our root element to react using reactdom
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //after creating root it is reactdoms duty to render/ insert heading 

// root.render(heading);

//creating nested structure

// import React  from "react";
// import  ReactDOM  from "react-dom/client";

// const parent = React.createElement("div",{class:"parent"},
// [React.createElement("div",{id:"child1"},
//    [ React.createElement("h1",{},"I'm a h1 tag"),
//      React.createElement("h2",{},"I'm a h2 tag")]),
//   React.createElement("div",{id:"child2"},
//   [ React.createElement("h1",{},"I'm a h1 tag"),
//     React.createElement("h2",{},"I'm a h2 tag")])]) ;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1","","This is heading from react element");
const root = ReactDOM.createRoot(document.getElementById("root"));


//
console.log(heading);
// const heading2 = (<h1 id="heading">This is heading 
// from JSX</h1>);
// setTimeout(()=>{
//   root.render(heading2)
// },10000);

// console.log(heading2);

var data = 10000;



const Title = () => {
  return <h1>Hello to react components</h1>
}

const Content = () => {
  return (
    <div id = "container"> 
    <Title />
    { Title() }
    {data}
    <p>This is content paragraph</p>
    </div>

  )
}

const componentInElement = (
  <div id="container">
    { Content() }
  </div>

)

root.render(componentInElement);
