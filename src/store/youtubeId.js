import { createSlice } from "@reduxjs/toolkit";

const youtubeId = createSlice({
    name: "youtubeId",
    initialState : null,
    reducers: {
        addYoutubeData(state, action){
            return action.payload
        },
    }
});

export const {addYoutubeData} = youtubeId.actions;

export default youtubeId.reducer;