import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./userInfo"
import nowPlayingInfo from "./nowPlayingInfo"
import youtubeId from "./nowPlayingInfo"

const appStore = configureStore({
    reducer: {
        userInfo : userInfo,
        nowPlayingInfo : nowPlayingInfo,
        youtubeId : youtubeId

    }

});

export default appStore;



