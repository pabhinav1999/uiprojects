import React from "react";
import TechStack from "./TechStack";

const ListRendering = ()=>{

    const places = ['India','Australia','UK'];
    const techs = [  
        {id:101,course:"React", branch:"Frontend"},  
        {id:102,course:"SpringBoot", branch:"Backend"}  
    ]  
    // return (
    //     <div>
    //         <div>{places[0]}</div>
    //         <div>{places[1]}</div>
    //         <div>{places[2]}</div>
    //     </div>
    // )

    // return (
    //     <div>{
    //         places.map((place)=>  <h2>{place} is a country</h2>)
    //         }</div>  
    // )


    // const placeList = places.map( place =>   <h2>{place} is a country</h2> ) ;
    // return (
    //     <div>{placeList}</div>
    // )

    // try to refactor jsx to another component, 

    // const techDescription = techs.map((tech) => <div><h2>{tech.course} is a framework comes under one of the {techs.branch}</h2></div>)   
    // // If we do have complex jsx syntax and any other requirement .. It always good to maintain seperate component
    // return (
    //     <div>{techDescription}</div>
    // )

    // const techDescription = techs.map((tech) => <TechStack tech={tech} />)
    // return <div>{techDescription}</div>
    
    const techDescription = techs.map((tech) => <TechStack key={tech.id} tech={tech} />)
    return <div>{techDescription}</div>


}

export default ListRendering



