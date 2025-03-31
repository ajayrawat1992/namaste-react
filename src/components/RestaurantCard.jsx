import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard=({resdata})=>
    {
         const {id,cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla:{deliveryTime}}=resdata?.info;
        
      return (
        <div className='res-card' style={{backgroundColor:"lightgrey"}}>
         <Link key={id}
          to={"/restaurants/"+ id}> 
          <img className='res-logo'
          alt='food-image'
          src={ CDN_URL + cloudinaryImageId}/>
          </Link>
          <h3>{name}</h3>
          <h3>{cuisines.join(',')}</h3>
          <h3>{avgRating}⭐</h3>
          <h3>{costForTwo}</h3>
          <h3>{deliveryTime} minutes</h3>
        </div>
      )
    }

    export default RestaurantCard