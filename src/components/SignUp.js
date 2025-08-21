import { useState} from "react";
import { prime_logo } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { emailvalidation, passwordvalidation } from "./validation";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser } from "../store/userInfo";

const SignUp = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [emailvalidationcheck,setemailvalidationcheck] = useState(true);
    const [passwordvalidationcheck, setpasswordvalidationcheck] = useState(true);
    const [authError, setauthError] = useState(true);   
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const[userName,setuserName] = useState();
     const emailInput =(e)=>{
        setemail(e.target.value);
    };
    const passwordInput =(e)=>{
        setpassword(e.target.value);
    };
    const userNameinput =(e)=>{
        setuserName(e.target.value);
    };
    const signUphandle =()=>{
        const emailvalidationResult=emailvalidation(email);
        const passwordvalidationResult = passwordvalidation(password);
        setemailvalidationcheck(emailvalidationResult);
        setpasswordvalidationcheck(passwordvalidationResult);
        if(emailvalidationResult===true && passwordvalidationResult===true){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                displayName: userName, photoURL: "https://example.com/jane-q-user/profile.jpg"
               }).then(() => {
                const {displayName,email,uid} =user;
                dispatch(adduser({displayName:displayName, email:email,uid:uid}));
                navigate("/home");
               }).catch((error) => {});
             })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setauthError(errorCode + " " + errorMessage)
             });
        }
        };
     return(
            <div className="w-6/12 justify-self-center">
                <div className="p-2 m-4">
                    <img className="h-18 w-24 justify-self-center" src={prime_logo} alt="prime"/>
                </div>
                <div className="ring-1 ring-gray-300 w-8/12 justify-self-center rounded-lg p-4">
                    <div className="p-2 mx-2">
                        <h1 className="font-bold text-3xl">Sign Up</h1>
                    </div>
                    <div>
                        <div className="p-2 mx-2 font-bold text-lg">
                            <h3>User Name</h3>
                        </div>
                        <div className="mx-2 px-2">
                            <input className="ring-1 ring-black w-full p-1 rounded-sm" type="text" placeholder="Enter your user name" onChange={userNameinput}>
                            </input>
                        </div>
                        <div className="p-2 mx-2 font-bold text-lg">
                            <h3>Email</h3>
                        </div>
                        <div className="mx-2 px-2">
                            <input className="ring-1 ring-black w-full p-1 rounded-sm" type="text" placeholder="Enter your email address " onChange={emailInput}>
                            </input>
                            {emailvalidationcheck===true?null:<p className="text-red-500 font-bold">{emailvalidationcheck}</p>}
                        </div>
                        <div className="p-2 mx-2 font-bold text-lg">
                            <h3>Password</h3>
                        </div>
                        <div className="mx-2 px-2">
                            <input className="ring-1 ring-black w-full p-1 rounded-sm" type="text" placeholder="Enter your password" onChange={passwordInput}>
                            </input>
                            {passwordvalidationcheck===true?null:<p className="text-red-500 font-bold">{passwordvalidationcheck}</p>}
                        </div>
                        <div className="mx-2 p-2">
                            <button className="bg-yellow-400 w-full p-2 rounded-lg my-2 hover:ring-black hover:bg-yellow-500" onClick={signUphandle}>
                                Sign Up       
                            </button>
                             {authError===true?null:<p className="text-red-500 font-bold">You are already a user. Please sign In{authError}</p>}
                        </div>
                        <div className="mx-2 p-2">
                            <h3 className="text-sm -mt-3">
                                By continuing, you agree to the terms and conditions.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="justify-self-center m-4">
                <div>
                    <h3 className="justify-self-center">Already have an account?</h3>
                </div>
                <div className="w-full m-4">
                    <Link to="/" className="justify-self-center ring-1 rounded-xl ring-gray-400 p-2 hover:bg-gray-100 hover:ring-black">Click here to Sign In</Link>
                </div>
                </div>
                
            </div>
        )
};

export default SignUp;