import { useState } from "react";
import { useSelector } from "react-redux";

const TrailerInfo =({movieId})=>{
    const [showInfo, setshowInfo] = useState(false);
    const nowPlayingData= useSelector(e=>e?.nowPlayingInfo?.results);
    const trailerResult = nowPlayingData?.filter((e)=>{
        return e?.id===movieId;
    });
    const eventMoreInfo =()=>{
        setshowInfo(!showInfo);
    }
    
    return(
       <div className="absolute z-10 w-4/12 top-56 left-16">
                <h1 className="text-white font-bold text-3xl">{trailerResult[0]?.title}</h1>
                <h3 className="text-white text-sm my-2">{trailerResult[0]?.overview}</h3>
                {showInfo?<div><h3 className="text-white text-sm">Orginal language: {trailerResult[0]?.original_language}</h3>
                <h3 className="text-white text-sm">Orginal Title: {trailerResult[0]?.original_title}</h3>
                <h3 className="text-white text-sm">release Date :{trailerResult[0]?.release_date}</h3></div>:null
                }
                <div className="flex">
                    <button className="font-bold ring-1 bg-black text-white p-2 rounded-2xl my-2 hover:bg-white hover:text-black">▶️ Watch Now</button>
                    <button className="font-bold ring-1 bg-black text-white p-2 rounded-2xl my-2 mx-2 hover:bg-white hover:text-black" onClick={eventMoreInfo}>ℹ️ More info</button>
                </div>
        </div>
    )
};

export default TrailerInfo;