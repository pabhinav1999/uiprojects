// Theory

 /* Q1. What is the difference between named export,default export and * as export?
A: Default export :
   Only one default export for js file , imported normally ( without curly braces) 
   Eg: import 'React' from 'react'
   
   Named export :
   There can be more than one named exports, imported with curly braces
   Eg: import {CON_URL} from "App"
   
   * as export :
   Wildcard export exports all named exports in one go and can be imported in module
   Eg: export const foo,
       export const bar 

       import * as myModule from './Assignment1'
       console.log(myModule.foo)
       console.log(myModule.bar)

    
      
    Q2. What is the importance of config.js file?
    A: Config.js file can be used to store configuration settings, environment variables,
     centralized constants, any dynamic theming

    Q3: What is React Hook?
    A: React Hook is a normal JS function given by react with some logic written behind the scenes
      Most important hooks
      a) use State(), use Effect()

    Q4: Why do we need a useState Hook ?
    A: Use state hook provides a way to update ui whenever the state variable is updated. Without use state hook, 
       we cannot update the ui
       */

