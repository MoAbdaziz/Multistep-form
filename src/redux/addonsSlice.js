import { createSlice } from "@reduxjs/toolkit";

const addonsSlice = createSlice({
name:"addons",
initialState:{
    online:1,
    storage:2,
    profile:2,
    planarr:[],

},
reducers:{
    Year:(state,action)=>{
state.online=state.online*action.payload
state.storage=state.storage*action.payload
state.profile=state.profile*action.payload
    }
    ,

    Month:(state,action)=>{
        state.online=state.online
state.storage=state.storage
state.profile=state.storage

    },

addtoplan:(state,action)=>{

const checkexist = state.planarr.find((item)=>item.name==action.payload.name)
    if (checkexist){
        

    }else {
        state.planarr=state.planarr.concat(action.payload)
    }

}
,
removefromplan:(state,action)=>{

    state.planarr=state.planarr.filter((item,i)=> item.id !== action.payload.id)

}

}

})

export default addonsSlice.reducer
export const {Year,Month,addtoplan,removefromplan}=addonsSlice.actions