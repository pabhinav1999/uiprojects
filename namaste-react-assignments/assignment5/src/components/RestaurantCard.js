import mcdonalds from "../../../images/Mcdonals.jpg"

const imgStyle = {
    width:'150px',
    backgroundColor:'yellow',
    height:'140px'
   }

const RestaurantCard = ({restaurantDetails}) => {
    console.log("Hello");
    console.log({restaurantDetails});
    return (
        <div className="restaurantCard">
        <img src={mcdonalds} style={imgStyle}></img>
        <p> {restaurantDetails.name}</p>
        <p> {restaurantDetails.cuisine}</p>
        <p> {restaurantDetails.location} </p>
        <p> {restaurantDetails.deliveryTime}</p>
        <p> {restaurantDetails.ratings} stars</p>
        </div>

    )
   }

   export default RestaurantCard;