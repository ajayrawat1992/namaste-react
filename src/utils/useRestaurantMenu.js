import { useEffect, useState } from "react"
//import RestaurantMenu from "../components/RestaurantMenu"
import { MENU_API } from "./constants"

const useRestaurantMenu=(resid)=>
{
    const [resInfo,setResInfo]=useState(null)
    
    useEffect(()=>{
      fetchData()
    },[])


    const fetchData= async ()=>
    {
       const response=await fetch(MENU_API +resid)
       const data=await response.json()
       setResInfo(data.data)
    };
    return resInfo;
};


export default useRestaurantMenu