/*  Assignment 1

                Theory questions
1) What is Emmet?
A:  Emmet is a plugin which provides quick and efficient ways to write html and css code. It is a web abbreviation syntax

2)Difference between Library and Framework
A: Library
   --> Library is a collection of prewritten codes that can be used by any other programs
   --> It provides specific, well defined classes for reference
   --> Control flow is in the hands of developer , they can dcecide when to call the functions in library

   Framework
   --> Framework is a more comprehensive structure that follows set of rules and guidelines to develop a software
   --> It can also include set of libraries and also define the architecture of application
   --> Control flow is in the hands of framework

3) What is CDN ? Why do we use it?
A: CDN means content delivery network. It has distributed cache servers all over the world placed strategically at some geo-
   locations to deliver web content fast. Web content includes images,videos, stylesheets, scirpts , etc.
   It improves the performance, reliability

   Some key resons why CDNs are used
   a) Load balancing
   b) Faster Content Delivery
   c) Scalability
   d) Cost cutting
   e)Enhanced security

4) Why is React known as react?
A: React genuinely reflects its name due to its reactive programming models which makes one of the key features for a wbesite 
   for its performance

5)What is the cross origin in the script tag?
A:Cross origin is one of the security feature implemented when they are requests from external site. It attaches some headers and
 processes the request

 for eg : loading the script through script tag is in the same origin , hence no cors required but to load react cdn links we require
          cross origin as it is another domain/protocol/port

6) What is the difference between React and ReactDOM?
A: React is a core library for building user interfaces in react application
   Responsibilities:
   a) Manages the virtual DOM 
   b)Implements the component life cycle methods
   c) responsible for JSX
   d) manages state, props

   ReactDOM is specifically for web platform. it is responsible for react elements to render in browser.
   It is kind of glue which links between react and web platform, provides additional functionality to web applications

7)What is the difference between reat.development.js and react.production.js through cdn?
A: React Development:
   It is used for developing environments.It aids developer with extra console messages and specific debugging
   It is slower than production

   React Production:
   It is used in installing / production environments. It minimizes all the files and optimises performance and obviously 
   faster than development

8)Learn about async and defer

   
                       

*/
/* Coding
  q1)  Build your first Hello World program using
   . using just html
   . using js to manipulate the DOM
   . using react
*/

// creating h1 element using javascript

var headingFromJS = document.createElement("h1");
headingFromJS.innerHTML = "Hello World created using Javascript";

document.body.appendChild(headingFromJS);

console.log(React);
var headingFromReact = React.createElement("h1",{id:"headingFromReact"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingFromReact);

var nestedElement = React.createElement("div", {id:"nestedElement"},[
   React.createElement('div',{id:'parent1'}, React.createElement("h1",{},"Hello this is parent1")),
   React.createElement('h1',{id:"parent2"},"This is parent2")
])

const root2 = ReactDOM.createRoot(document.getElementById("nestedElementContainer"));
root2.render(nestedElement);


