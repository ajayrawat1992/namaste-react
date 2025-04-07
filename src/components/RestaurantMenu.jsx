import { useState } from "react"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
 

  const RestaurantMenu=()=>
  {
       
      const [showIndex,setShowIndex]=useState(null)
      const {resId}=useParams()  // resId is getting id of restaurant passed in URL using useParams Hook
       // console.log(showIndex)
      const resInfo=useRestaurantMenu(resId)  // we have used custom hook here  only to display data not how to fetch data
       //console.log(resInfo)
    if (resInfo===null) {
      return (<Shimmer/>)
    }
    //The second code checks if (resInfo === null) immediately and returns the Shimmer component, which ensures that the rest of the component does not try to access the data before it is available.
      
      const {name,cuisines,costForTwoMessage}  = resInfo?.cards[2]?.card?.card?.info
       //const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
       //console.log(itemCards)
       const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
       //console.log("categories",categories)
      return (
          <div className="restaurant-menu text-center">
        <h2 className="font-bold my-3 text-xl">{name}</h2>
        <p className="text-lg font-semibold mb-16">
          {cuisines.join(',')} -  {costForTwoMessage}
        </p>
        {categories.map((category,index)=>
        //controlled component
        <RestaurantCategory   
        key={category.card.card.title}
        category={category.card.card}
        showIndex={index==showIndex && true}
        setShowIndex={()=>setShowIndex(index)}/>)}
        </div>
      )
  }

export default RestaurantMenu





{/*
       
  <h3>Menu</h3>
        <ul>
          {itemCards.map(items=><li key={items.card.info.id}>{items.card.info.name} - {"Rs."}{items.card.info.price || "500" }</li>)}          
        </ul> */}


  // This is example of controlled and uncontrolled component .In this RestaurantMenu  has full control over its children(showItems)
  //in uncontrolled component  RestaurantCategory has its own state (const [showItems,setShowItems]=useState(false)) .it was controlling its state




// So, what happens on click?
// When each RestaurantCategory is rendered, it receives:

// A unique index from .map(...)

// A specific setShowIndex function with that index bound in a closure

// This line:

// setShowIndex={() => setShowIndex(index)}
// ...creates a new function for each category that, when called, will set the parent's showIndex to that category's index.


// Each iteration of the .map(...) creates its own version of index in scope.

// So, for example:

// 1.The 1st category gets setShowIndex={() => setShowIndex(0)}

// 2.The 2nd category gets setShowIndex={() => setShowIndex(1)}

// 3.The 3rd gets setShowIndex={() => setShowIndex(2)}

// ...and so on.