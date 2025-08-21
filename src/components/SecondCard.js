import MovieList from "./MovieList";

const SecondCard =()=>{
    return(
    <div className="bg-black -my-36 absolute w-full">
        <div>
            <h1 className="text-white font-bold text-l">
                <h2 className="text-white p-2 underline">Now Playing</h2>
                <MovieList/>
                <h2 className="text-white p-2 underline">Trending</h2>
                <MovieList/>
                <h2 className="text-white p-2 underline">New releases</h2>
                <MovieList/>
                <h2 className="text-white p-2 underline">Most rated on IMDB</h2>
                <MovieList/>
            </h1>
            
        </div>
    </div>
    )
};

export default SecondCard;