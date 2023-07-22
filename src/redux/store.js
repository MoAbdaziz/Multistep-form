import { configureStore } from "@reduxjs/toolkit";
import priceSlice from "./priceSlice";
import addonsSlice from "./addonsSlice";

const store = configureStore({
    reducer:{
        price:priceSlice,
        adds:addonsSlice,

    },
})

export default store