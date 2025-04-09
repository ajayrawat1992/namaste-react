import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
        name:"cart",
        initialState:{
            items:[]
        },
        reducers:{
            addItem:(state,action)=>{
                 //RTK uses immer behind the scenes
                state.items.push(action.payload)   // we have to mutate the state
            },
            removeItem:(state)=>
            {
                state.items.pop()
            },
            clearCart:(state)=>
            {
             state.items.length=0
            },

        },
    })

export const {addItem,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer