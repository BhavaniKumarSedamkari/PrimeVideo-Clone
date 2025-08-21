import { useState } from "react";
import { prime_logo } from "../utils/constants";
import { Link, useNavigate} from "react-router-dom";
import {emailvalidation,passwordvalidation} from "./validation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser } from "../store/userInfo";
const SignInEmail=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [emailEntered, setemailEntered ] = useState(false);
    const [emailvalidationcheck,setemailvalidationcheck] = useState(true);
    const [passwordvalidationcheck, setpasswordvalidationcheck] = useState(true);
    const [authError, setauthError] = useState(true);
    const [email, setemail] = useState();
    const [password, setpassword] = useState('');
    const emailInput =(e)=>{
        setemail(e.target.value);
    };
    const passwordInput =(e)=>{
        setpassword(e.target.value);
    };

    const ContinueHandle =()=>{
        setauthError(true);
       const emailvalidationResult=emailvalidation(email);
       setemailvalidationcheck(emailvalidationResult);
        if (emailvalidationResult===true){
         setemailEntered(true);
        };
    };
    const SignInHandle =()=>{
       const passwordvalidationResult = passwordvalidation(password);
       setpasswordvalidationcheck(passwordvalidationResult);
       if(passwordvalidationResult===true){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
              const user = userCredential.user;
              const {name, email, uid} =user;
              
            dispatch(adduser({displayName:name, email:email,uid:uid}));
            navigate("/home");
         })
         .catch((error) => {
         const errorCode = error.code;
        const errorMessage = error.message;
        setauthError(errorCode + " " + errorMessage);
        setemailEntered(false);
        setemail('');
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
                    <h1 className="font-bold text-3xl">Sign In</h1>
                </div>
                <div>
                    <div className="p-2 mx-2 font-bold text-lg">
                        {emailEntered?<h3>Enter password</h3>:<h3>Enter your Email</h3>}
                    </div>
                    <div className="mx-2 px-2">
                        {emailEntered?<input className="ring-1 ring-black w-full p-1 rounded-sm" type="text" onChange={passwordInput} value={password}></input>:
                        <input className="ring-1 ring-black w-full p-1 rounded-sm" type="text" onChange={emailInput} value={email}></input>}
                    </div>
                    {emailvalidationcheck===true?null:<p className="text-red-500 mx-4 font-bold">{emailvalidationcheck}</p>}
                    {passwordvalidationcheck===true?null:<p className="text-red-500 mx-4 font-bold">{passwordvalidationcheck}</p>}
                    <div className="mx-2 p-2">
                        {emailEntered?<button className="bg-yellow-400 w-full p-2 rounded-lg my-2 hover:ring-black hover:bg-yellow-500" onClick={SignInHandle}>
                            <p>Sign In</p></button>:<button className="bg-yellow-400 w-full p-2 rounded-lg my-2 hover:ring-black hover:bg-yellow-500" onClick={ContinueHandle}>
                            <p>Continue</p></button>}  
                        {authError===true?null:<p className="text-red-500 font-bold">Invalid Sign In credentails. Please enter valid email and password</p>}      
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
                <h3 className="justify-self-center">New to Amazon?</h3>
            </div>
            <div className="w-full m-4">
                <Link to="/signup" className="justify-self-center ring-1 rounded-xl ring-gray-400 p-2 hover:bg-gray-100 hover:ring-black">Create your Amazon account</Link>
            </div>
            </div>
            
        </div>
    )
};

export default SignInEmail;