import RestaurantCard from "./RestaurantCard"
import {useEffect, useState } from "react"
import Shimmer from "./Shimmer"

 export const Body=()=>
{
  const [listofrestaurants,setListOfRestaurants] = useState([])
  const [filteredrestaurant,setFilteredRestaurant]=useState([])
  const [searchtext,setSearchText]=useState("")


  useEffect(()=>{
    fetchData()
  },[])
  
  const fetchData= async ()=>
  {
    try {
      const response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4559531&lng=77.32023749999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const data= await response.json()
      //console.log(data)

      //const listOfRestaurantsArray =  Object.values(data.data.cards[4].card.card.info)
      console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurants(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredRestaurant(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      //console.log("listofrestaurants",listofrestaurants)
    } catch (error) {
       console.log("error :: "+error.message)
    }
    
  }
 // console.log("rendereding....")

      return  listofrestaurants.length===0 ? <Shimmer/> :( 
        <div className='body'>          
          <div className='Filter'>
          <div className="search">
            <input type="text"
              className="search-box"
              placeholder="Enter Text" 
              value={searchtext}
              onChange={(e)=>setSearchText(e.target.value)}>
      
              </input>
            <button onClick={()=>{
              const filteredRes=listofrestaurants.filter(res=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
                 setFilteredRestaurant(filteredRes)}
              }>
                Search
            </button> 
          </div>
            <button
             className="filter-btn"
              onClick={()=>{const filteredList=listofrestaurants.filter(restaurant=>restaurant.info.avgRating > 4); 
             //   console.log(filteredList)
             setListOfRestaurants(filteredList)
             //setListOfRestaurants("")
            }}
             >
              top rated Restaurants
              </button>
          </div>
          <div className='res-container'>            
            {filteredrestaurant.map((Restaurant)=> <RestaurantCard  key={Restaurant.info.id}  resdata={Restaurant}/>)}
          </div>  
        </div>
      )
    }
  

    export default Body