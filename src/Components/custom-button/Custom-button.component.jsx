import React from "react";
import './Custom-button.style.scss';

const Custombutton = ({children, isGoogleSignIn, ...otherprops})=>{
    return(
        <button className={`${ isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherprops}>
            {children}
        </button>
    );
}

export default Custombutton;