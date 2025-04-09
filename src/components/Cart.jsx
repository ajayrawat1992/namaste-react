import React from "react"
import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart=()=>
{
    const dispatch=useDispatch()
    const handleClearItem=()=>
    {
       dispatch(clearCart())
    }

    const cartItems = useSelector((store)=>store.cart.items)
    console.log("cartItems",cartItems)
    return(

        <div className="text-center">
        <h3 className="m-10 font-semibold  text-3xl">Cart</h3>
        <button className=" mb-8 font-semibold p-2 bg-black text-white rounded-lg" onClick={handleClearItem}>
            Clear cart</button>
        <div className="w-7/12 m-auto">
        <ItemList  items={cartItems}/>
        {cartItems.length==0 && <h3>Your cart is empty . Please add Items</h3>}
        </div>
        </div>
    )
}

export default  Cart