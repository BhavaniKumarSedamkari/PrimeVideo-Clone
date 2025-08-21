import { useEffect, useState } from "react";
import { options } from "../utils/constants";
const useNowPlaying=()=>{
    const [jsondata, setjsondata] = useState();
    useEffect(()=>{
        apicall();
    },[]);

    const apicall = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=HI&page=1&region=IN', options);
         const json= await data.json();
        setjsondata(json);
    }
    return jsondata;
};

export default useNowPlaying;