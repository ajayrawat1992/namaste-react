import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard=({resdata})=>
    {
         const {id,cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla:{deliveryTime}}=resdata?.info;
        const user=useContext(UserContext)
      return (
        <div className='w-64 h-[450px] bg-gray-300 m-1 hover:bg-slate-500 p-1 '>
         <Link key={id}
          to={"/restaurants/"+ id}> 
          <img className='h-64 w-full object-cover '
          alt='food-image'
          src={ CDN_URL + cloudinaryImageId}/>
          </Link>
          <div className="m-2">
          <h3 className="font-semibold text-lg mb-2 ">{name}</h3>
          <h3  className="break-all">{cuisines.join(',')}</h3>
          <h3>{avgRating}⭐</h3>
          <h3>{costForTwo}</h3>
          <h3>{deliveryTime} minutes</h3>
          <h3>{user.loggedInUser} </h3>
          </div>
        </div>
      )
    }

     ///For Higher order component

    // export const withPromotedLabel=(RestaurantCard)=>
    // {
    //   return (props)=>
    //   {
    //     return(
    //       <div>
    //         <label>Promoted</label>
    //         <RestaurantCard {...props}/>
    //       </div>
    //     )
    //   }
    // }

    export default RestaurantCard
    


