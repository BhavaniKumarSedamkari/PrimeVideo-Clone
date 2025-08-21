import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: "userInfo",
    initialState : null,
    reducers : {
        adduser: (state,action)=>{
            return (action.payload)
        },
        removeuser:(state, action)=>{
            return action.payload
        },
    }
});

export const {adduser,removeuser} = userInfo.actions;

export default userInfo.reducer;