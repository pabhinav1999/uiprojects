import RestaurantCard from "./RestaurantCard";
import { respFromApi } from "./../utils/Restaurant_Constants";
import React, { useState } from 'react';


const ContentComponent = () => {
   const [listOfRes, setListOfRes] = useState(respFromApi);
    return (
        <>
           <div className="search-container">
              <input className="input-bar" type="text" ></input>
              <button className="search-button" onClick={() => {
               let filteredData = listOfRes.filter((restaurant) => restaurant.ratings > 4)
               setListOfRes(filteredData);
              }} >Search</button>
           </div>
           <div className="restaurants-container">
               {/* <RestaurantCard key={respFromApi[0].id} restaurantDetails = {respFromApi[0]} />
               <RestaurantCard key={respFromApi[1].id} restaurantDetails = {respFromApi[1]} />
               <RestaurantCard key={respFromApi[2].id} restaurantDetails = {respFromApi[2]} />
               <RestaurantCard key={respFromApi[3].id} restaurantDetails = {respFromApi[3]} />
               <RestaurantCard key={respFromApi[4].id} restaurantDetails = {respFromApi[4]} />
               <RestaurantCard key={respFromApi[5].id} restaurantDetails = {respFromApi[5]} />
               <RestaurantCard key={respFromApi[6].id} restaurantDetails = {respFromApi[6]} /> */}
               {/* <RestaurantCard resName=" ShahGouse" cuisine="Hyderabadi" /> */}
               {/* <RestaurantCard />
               <RestaurantCard />
               <RestaurantCard /> */}

               {
                 listOfRes.map((restaurant) => {
                    return (<RestaurantCard key={restaurant.id}
                     restaurantDetails={restaurant}
                      />  )
                })
               }
           </div>
        </>
    )
   }

    const filterRestaurants = (resList) => {
      resList.filter((restaurant) => restaurant.ratings > 4 )};


   export default ContentComponent;