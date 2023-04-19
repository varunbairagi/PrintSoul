import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const store=configureStore({

    reducer:{
        productData:productSlice,
        cartData:cartSlice,
    }
})
export default store;