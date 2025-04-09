import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from '../utils/cartSlice'

const appStore=configureStore({
   reducer:{                      // it is big reducer of our app
    cart: cartReducer,           //  small reducer from different slices
          }
})

export default appStore