import React , { useEffect, useState } from "react";
import useNowPlaying from "./useNowPlaying";
import { options } from "../utils/constants";
import TrailerInfo from "./TrailerInfo";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../store/nowPlayingInfo";
import SecondCard from "./SecondCard";

const MovieTrailer = ()=>{
    const dispatch = useDispatch();
    const [apiData, setapiData] = useState(null);
    const [movieId, setmovieId] = useState();
    const [video , setvideo] = useState();
    const nowPlayingMovies = useNowPlaying();
    useEffect(()=>{ 
      if(nowPlayingMovies){
        const randomIndex = Math.floor(Math.random() * nowPlayingMovies?.results?.length);
        const randomIndexMovieId =nowPlayingMovies?.results[randomIndex]?.id;
        setmovieId(randomIndexMovieId);
        dispatch(addNowPlaying(nowPlayingMovies));
      }
    },[nowPlayingMovies]);
    useEffect(()=>{
            if(movieId)
            {apicall();}
    }, [movieId]);

    const apicall = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const json = await data.json();
        
        if(json?.results?.length===0){
            const randomIndexMovieId =nowPlayingMovies?.results[1]?.id;
            setmovieId(randomIndexMovieId);
        }
        setapiData(json);
        
        
    };
    
    const filterTrailer = apiData?.results?.filter((e)=>{
        return e.type==="Trailer";
    });
    useEffect(()=>{
        setvideo(apiData?.results[0]?.key);
        if(filterTrailer){
            setvideo(filterTrailer[0]?.key);
        }
        
    },[filterTrailer]);

    return(
    
        video?(
        
        <div>
        
            <div className="-my-4 absolute -z-20">
                <iframe className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${video}?si=5bEs4_qxVDLEgn1k&controls=0&start=4&autoplay=1&loop=1&mute=1&cc_load_policy=0`}
                title="YouTube video player"
                referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
            <TrailerInfo movieId={movieId}/>
            <SecondCard />
            </div>
        </div>):(null)
    
    )
};

export default MovieTrailer;