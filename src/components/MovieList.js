import { useSelector } from "react-redux";
import { options } from "../utils/constants";
import { useEffect, useState } from "react";

const MovieList = ()=>{
    const nowPlayingData = useSelector((e)=> e?.nowPlayingInfo?.results);
    let array =[];
    const [keyDataReady , setkeyDataReady] = useState(false); 
    const [arrayState, setarrayState] = useState();

    useEffect(()=>{
        nowPlayingData.map(async (e)=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${e?.id}/videos?language=en-US`, options);
        const json = await data.json();
        const filterTrailer = json?.results?.filter((e)=>{
        return e.type==="Trailer";
        });
        array.push(filterTrailer[0]?.key);
        if(array.length===20){
        setkeyDataReady(true);
        const filtteredArray= array.filter((e)=>{
            if(e!==undefined){
                return e;
            }
        })
        setarrayState(filtteredArray);
    };
    
    })
    },[]);
    
    return(
        keyDataReady?
        <div className="flex overflow-scroll scrollbar-hide">
            {
                arrayState.map((e, index)=>{
                    return (
                        
                        <img className="w-80 p-2 rounded-2xl hover:cursor-pointer" src={`https://img.youtube.com/vi/${e}/maxresdefault.jpg`} key={index}/>
                        
                    )
                })
            }

       </div>:null
    )
};

export default MovieList;