import { createSlice } from "@reduxjs/toolkit";

const nowPlayingInfo = createSlice({
    name: "nowPlayingInfo",
    initialState : null,
    reducers : {
        addNowPlaying: (state,action)=>{
            return action.payload

        },
    }
});

export const {addNowPlaying} = nowPlayingInfo.actions;

export default nowPlayingInfo.reducer;