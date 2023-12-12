/* 
1) What is JSX?
A: JSX is atype of javascript syntax where it tries to merge html and js . It is strictly not part of react

2)React.createElement vs JSX
A: both returns the same object , but syntax wise jsx is easier especially in case of nested elements

3)Benefits of JSX
A: In the middle of html, we can open curly braces and execute js code inside it
   1) Declarative syntax
   2) Readability
   3) Maintainability
   4)Tooling and ecosystem
   5) Adoption
   6) Performance optimization

4)Behind the scenes of JSX
A: JSX is converted into javascript equivalent code through babel compiler.
   JSX => React.createElement => ReactEle(js obj) => renderHTML


*/
/*  Coding Assignment  */

/* Q1A) Create a nested  header element using React.createElement(h1,h2,h3 inside a div with class "title") */
import React from "react";
import ReactDom from "react-dom/client";

const nestedHeader = React.createElement("div",{className:"title"},[
   React.createElement("h1",{},"Hello this is h1"),
   React.createElement("h2",{},"Hello this is h2"),
   React.createElement("h3",{},"Hello this is h3")
])

const assign3Root = ReactDom.createRoot(document.getElementById("q1a"));
assign3Root.render(nestedHeader);
console.log(nestedHeader)

/* 1b) Create same element using JSX */
const nestedHeaderJSX = (
   <div className="title">
      <h1>Hello h1 from JSX</h1>
      <h2>Hello h2 from JSX</h2>
      <h3>Hello h3 from JSX</h3>
   </div>
)
const assign3RootJSX = ReactDom.createRoot(document.getElementById("q1b"));
assign3RootJSX.render(nestedHeaderJSX);

console.log(nestedHeaderJSX);

console.log(nestedHeader === nestedHeaderJSX);

/* 1c) Create a functional component of the same with JSX */

const NestedHeaderComponent = () => {
   return (
      <div className="title">
      <h1 className="heading1">Hello h1 from JSX Funcional comp</h1>
      <h2 className="heading2">Hello h2 from JSX Functional comp</h2>
      <h3>Hello h3 from JSX Functional comp</h3>
   </div>
   )
}

const assign3RootComp = ReactDom.createRoot(document.getElementById("q1c"));
assign3RootComp.render(<NestedHeaderComponent />)

/* 1d) Add component inside another component */

const Component1 = () => {
   return (
      <div>
      <h2>Rendering another component</h2>
      <div><Component2 /></div>
      </div>
   
   )
}

const Component2 = () => {
   return (
      <h2>This is component 2 rendered in component1</h2>
   )
}

const assign3RootCompositeComp = ReactDom.createRoot(document.getElementById("q1d"));
assign3RootCompositeComp.render(<Component1 />)

/* 2) Create a Header Component from scratch using Functional components with JSX */
const HeaderComponent = () => {
   return (
      <div className="header">
         <div className="logo">
            {LogoComponent()}
         </div>
         <div className="search-bar">
            <SearchComponent />
         </div>
         <div className="userIcon">
            <UserIcon></UserIcon>
         </div>
      </div>
   )
}

const LogoComponent = () =>{
   const imgUrl = "C:/github/uiprojects/namaste-react-assignments/images/combination-mark-logo-examples.jpg"
   return (<img className="image-adjust"
   src={imgUrl} alt="company-logo">
 </img>)}


const SearchComponent = () => {
   return (
      <label>Search :<input type="text"></input></label>
   )
}

const UserIcon = () => <img className="userIcon" src="" alt="userIcon"></img>

const q2Root = ReactDom.createRoot(document.getElementById("q2"));
q2Root.render(<HeaderComponent />)





 
