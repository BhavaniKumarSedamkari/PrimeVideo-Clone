import { useSelector } from "react-redux";
import Header from "./Header";
import MegaCard from "./MegaCard";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home =()=>{
    const user = useSelector((e)=>e);
    return(
        <div>
            <Header/>
            <MegaCard/>
        </div>
    )
};

export default Home;



