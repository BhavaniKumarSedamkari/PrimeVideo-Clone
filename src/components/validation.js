export const emailvalidation =(email)=>{
    const emailregex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailvalid =emailregex.test(email);
    if(!emailvalid){
        return ("Wrong or Invalid email address. Please correct and try again.")
    }
    else{
        return true;
    }
};

export const passwordvalidation =(password)=>{
    const passwordregex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const passwordvalid = passwordregex.test(password);
    if(!passwordvalid){
        return ("Your password is incorrect. Please correct and try again.")
    }
    else{
        return true;
    }
};
