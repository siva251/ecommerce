import React from "react";
import './Signin_and_signup.style.scss'
import Signin from "../../Components/signin/Signin.component";
import Signup from "../../Components/signup/Signup.component";

const SigninAndSingup = () =>{
    return(
        <div className="sing-in-and-sing-up">
           <Signin/>
           <Signup/>
        </div>
    );
}

export default SigninAndSingup;