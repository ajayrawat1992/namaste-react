import RestaurantCard from "./RestaurantCard"
import {useContext, useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"


 export const Body=()=>
{
  const [listofrestaurants,setListOfRestaurants] = useState([])
  const [filteredrestaurant,setFilteredRestaurant]=useState([])
  const [searchtext,setSearchText]=useState("")
  const {setUserName,loggedInUser}=useContext(UserContext)

  //console.log(listofrestaurants)
    //const RestaurantCardPromoted= withPromotedLabel(RestaurantCard)  //withPromotedLabel is HOC and passed with RestaurantCard ...it will return   RestaurantCardPromoted component with label inside in it


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
    setListOfRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      //console.log("listofrestaurants",listofrestaurants)
    } catch (error) {
       console.log("error :: "+error.message)
    }
    
  }
 // console.log("rendereding....")
  const onlineStatus=useOnlineStatus()
  if(onlineStatus === false)
  {
    return (<h2>Kindly check Connection.......</h2>)
  }



      return  listofrestaurants.length===0 ? <Shimmer/> :( 
        <div className='body'>          
          <div className='flex m-10  items-center'>
          <div className="">
            <input type="text"
              className="border border-solid border-black p-2 ml-10 w-60 font-medium "
              placeholder="Enter Text" 
              value={searchtext}
              onChange={(e)=>setSearchText(e.target.value)}>
      
              </input>
            <button onClick={()=>{
              const filteredRes=listofrestaurants.filter(res=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
                 setFilteredRestaurant(filteredRes)}
              } className="ml-4 bg-green-300 p-2 rounded-md">
                Search
            </button> 
          </div>
            <button
             className=" ml-20  bg-cyan-400 p-2 rounded-md"
              onClick={()=>{const filteredList=listofrestaurants.filter(restaurant=>restaurant.info.avgRating > 4); 
             //   console.log(filteredList)
             setListOfRestaurants(filteredList)
             //setListOfRestaurants("")
            }}
             >
              Top Rated Restaurants
              </button>
              <input 
              type="text" 
              className=" m-4 p-1 border border-black "
              value={loggedInUser}
              onChange={(e)=>setUserName(e.target.value)} ></input>
          </div>
          <div className='flex flex-wrap'>            
            {filteredrestaurant.map((Restaurant)=>
            <RestaurantCard  key={Restaurant.info.id}  resdata={Restaurant}/>)}
          </div>  
        </div>
      )
    }
  

    export default Body


    //{filteredrestaurant.map((Restaurant)=>  {Restaurant.info.promoted? <RestaurantCardPromoted resdata={Restaurant}/>:<RestaurantCard  key={Restaurant.info.id}  resdata={Restaurant}/>)}}