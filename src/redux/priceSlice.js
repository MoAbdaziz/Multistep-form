import {  createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const priceSlice=createSlice({
name:"price",
initialState:{
   arcade:9,
   advanced:12,
   pro:15,
   plan_1:"",
   thevalue:1,
   thecheck:false,

    
},
reducers:{
   choosevalue:(state,action)=>{
state.thevalue=action.payload
   },
   Yearlysub:(state,action)=>{
      state.arcade=state.arcade*action.payload
      state.advanced=state.advanced*action.payload
      state.pro= state.pro*action.payload

   },

   Monthlysub:(state,action)=>{
      state.arcade=state.arcade/action.payload
      state.advanced=state.advanced/action.payload
      state.pro= state.pro/action.payload

   },
choosePlan:(state,action)=>{
state.plan_1=null
state.plan_1=action.payload
},
thecheckchanger:(state,action)=>{
   state.thecheck=action.payload
}

}


})
export default priceSlice.reducer
export const {Yearlysub,Monthlysub,choosePlan,choosevalue,thecheckchanger}=priceSlice.actions