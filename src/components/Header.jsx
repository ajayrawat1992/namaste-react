import { LOGO_URL } from "../utils/constants"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"

const Header=()=> {
  const [btnstatus,setBtnStatus]=useState("Login")
   const onlineStatus=useOnlineStatus()
   const {loggedInUser}= useContext(UserContext)
   //console.log(loggedInUser)

    return (
      <div className='flex justify-between h-52 bg-slate-400 mb-3' > 
      <div className='logo-container'>
        <img className='w-52 m-14'
        src={LOGO_URL} alt='food-logo'/>
         </div>
         <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li  className="px-4">Online Status:{onlineStatus ? "🟢" :"🔴"}</li>
            <li className="px-4"><Link  to='/'>Home</Link></li>
            <li className="px-4"><Link to='/contact'>Contact</Link></li>
            <li className="px-4"><Link to='./grocery'>Grocery</Link></li>
            <li className="px-4"><Link to='/about'>About</Link></li>
            <li>Cart  </li>
            <button onClick={()=>{btnstatus==="Login"?setBtnStatus("Logout"):setBtnStatus("Login")}}>{btnstatus}</button>
            <li>{loggedInUser}</li>
          </ul>
         </div>
      </div>
    )
  }

  export default Header

  