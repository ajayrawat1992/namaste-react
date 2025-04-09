import { LOGO_URL } from "../utils/constants"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header=()=> {
   const [btnstatus,setBtnStatus]=useState("Login")
   const onlineStatus=useOnlineStatus()
   const {loggedInUser}= useContext(UserContext)
   //console.log(loggedInUser)

   const cartItems=useSelector((store)=>store.cart.items)  // we are selecting the portion of store .we are not subscribing  the whole store  // good for optimization
   
   // subscribing to the store using a selector 
   console.log(cartItems)

    return (
      <div className='flex justify-between h-52 bg-slate-400 mb-3'>
      <div className='logo-container'>
        <img className='w-52 m-14'
         src={LOGO_URL} alt='food-logo'/>
         </div>
         <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li  className="px-4">Online Status:{onlineStatus ? "🟢" :"🔴"}</li>
            <li className="px-4"><Link to='/'>Home</Link></li>
            <li className="px-4"><Link to='/contact'>Contact</Link></li>
            <li className="px-4"><Link to='./grocery'>Grocery</Link></li>
            <li className="px-4"><Link to='/about'>About</Link></li>
            <li className="px-4 font-semibold"><Link to='/cart'>Cart - ({cartItems.length} items)</Link></li>
            <button onClick={()=>{btnstatus==="Login"?setBtnStatus("Logout"):setBtnStatus("Login")}}>{btnstatus}</button>
            <li>{loggedInUser}</li>
          </ul>
         </div>
      </div>
    )
  }

  export default Header

  