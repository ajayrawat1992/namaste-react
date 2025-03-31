import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants"
 

  const RestaurantMenu=()=>
  {
      const [resInfo,setResInfo] = useState(null) 
      const {resId}=useParams()  // resId is getting id of restaurant passed in URL using useParams Hook
      //console.log("params",resId)  
      
      useEffect(()=>{
        fetchInfo()
      },[])

      const fetchInfo = async()=>
      {
        try {   
          //const response = await fetch( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4559531&lng=77.32023749999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")     
          const response = await fetch( MENU_API +resId)
          const data= await response.json()
          console.log(data.data)
          setResInfo(data.data)
        } catch (error) {
          console.log("Error "+ error.message)
        }
      }
   
    if (resInfo===null) {
      return (<Shimmer/>) 
    }
    //The second code checks if (resInfo === null) immediately and returns the Shimmer component, which ensures that the rest of the component does not try to access the data before it is available.
      
      const {name,cuisines,costForTwoMessage}   = resInfo?.cards[2]?.card?.card?.info
       const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
     // console.log(itemCards)
      return (
          <div className="restaurant-menu">
        <h2>{name}</h2>
        <p>
          {cuisines.join(',')} -   {costForTwoMessage}
        </p>
        <h3>Menu</h3>
        <ul>
          {itemCards.map(items=><li key={items.card.info.id}>{items.card.info.name} - {"Rs."}{items.card.info.price  }</li>)}          
        </ul>
        </div>
      )
  }

export default RestaurantMenu