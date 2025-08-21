import { useState } from "react";
import { prime_logo , searh_logo, profile_icon} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { removeuser } from "../store/userInfo";
import { useNavigate } from "react-router-dom";

const Header =()=>{
    const [showsSearchbox, setshowsSearchbox] = useState(false);
    const [showProfile, setshowProfile] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const storedata = useSelector(e=>e);
    const userEmail = storedata?.userInfo?.email;
    
    const eventSearchLogo=()=>{
        setshowsSearchbox(true);
    }
    const eventProfile=()=>{
        setshowProfile(!showProfile);
    }
    const clearStore=()=>{
        dispatch(removeuser(null));
        navigate("/");
    }
    return(
    <div className="absolute z-30 w-full">
        <div className="flex justify-between bg-gray-900">
            <div className="mx-4 flex py-2">
                <img className="h-16 w-22 px-2 mr-2 " src={prime_logo} alt="primelogo"/>
                <ul className="flex">
                    <li className="m-2 my-3 px-2 underline font-bold text-white hover:text-blue-400 hover:font-extrabold hover:cursor-pointer">Home</li>
                    <li className="m-2 my-3 px-2 font-bold underline text-white  hover:text-blue-400 hover:font-extrabold hover:cursor-pointer">Movies</li>
                    <li className="m-2 my-3 px-2 font-bold underline text-white  hover:text-blue-400 hover:font-extrabold hover:cursor-pointer">Tv shows</li>
                </ul>
            </div>
            <div className="flex mx-4 m-5 pt-1">
                {showsSearchbox?<input className="ring-1 ring-black rounded-md w-60 h-7 p-2" type="text" placeholder="Search for Movies and Tv shows"></input>: null}
                <img className="w-7 h-7 mx-2 bg-white rounded-full hover:bg-blue-200 hover:cursor-pointer" src={searh_logo} onClick={eventSearchLogo} alt="searchLogo"/>
                <img className="w-7 h-7 mx-2 mr-3 bg-white rounded-2xl hover:bg-blue-200 hover:cursor-pointer" src={profile_icon} onClick={eventProfile} alt="profileIcon"/>
            </div>
        </div>
        {
            showProfile?
            <div className="mx-3 justify-items-end absolute end-0">
            <div className="ring-2 ring-black bg-gray-950 opacity-70 px-2 pb-2 rounded-xl">
            <p className="text-white font-bold p-2"> Hi,</p>
            <p className=" text-white font-bold p-2">{userEmail}</p>
            <button className="font-bold  bg-gray-200 p-2 my-2 rounded-2xl hover:bg-black hover:text-white hover:font-extrabold" onClick={clearStore}>Sign Out</button>
            </div>
        </div>:null
        }
       
    </div>
    )
};

export default Header;