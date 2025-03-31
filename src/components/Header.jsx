import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"


const Header=()=> {
  const [btnstatus,setBtnStatus]=useState("Login")

    return (
      <div className='header'>
      <div className='logo-container'>
        <img className='logo'
        src={LOGO_URL} alt='food-logo'/>
         </div>
         <div className='nav-items'>
          <ul>
            <li><Link  to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li>Cart  </li>
            <button onClick={()=>{btnstatus==="Login"?setBtnStatus("Logout"):setBtnStatus("Login")}}>{btnstatus}</button>
          </ul>
         </div>
      </div>
    )
  }

  export default Header

  