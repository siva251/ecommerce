import React, { useEffect } from "react";

import './Signup.style.scss';
import Forminput from "../form-input/Form-input.component";
import Custombutton from "../custom-button/Custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/Firebase.utils";

class Signup extends React.Component{
    constructor(){
        super();
        
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmpassword} = this.state
        if (password !== confirmpassword){
            alert("Password don't match ");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
            })
        }
        catch(error){
            console.error(error);
        }
    }

    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name] : value});
    }

    render(){
        const {displayName, email, password, confirmpassword} = this.state
        return(
            <div className="sing-up">
                <h2 className="title"> I do not have  a account</h2>
                <span> Sign-up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <Forminput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Diplay Name' required></Forminput>
                    <Forminput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required></Forminput>
                    <Forminput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required></Forminput>
                    <Forminput type='password' name='confirmpassword' value={confirmpassword} onChange={this.handleChange} label='Confirm Password' required></Forminput>
                    <Custombutton type='submit'> SING UP</Custombutton>
                </form>
            </div>
        )
    }
}

export default Signup;