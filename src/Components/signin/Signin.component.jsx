import React from "react";
import Forminput from "../form-input/Form-input.component";
import './Signin.style.scss';
import Custombutton from "../custom-button/Custom-button.component";
import { signInWithGoogle } from "../../firebase/Firebase.utils";

class Signin extends React.Component {
    constructor(){
        super();
        this.state = {
            email :"",
            password : ""
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'', password: ''})
    }
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState ({[name] : value})
    }
    render(){
        return(
            <div className="sign-in">
            <h2>I already have an account</h2>
            <span>SignIn with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <Forminput name="email" type="email" handlechange={this.handleChange} value={this.state.email} label='Email' required/>
                <Forminput name="password" type="password" handlechange={this.handleChange} value={this.state.password} label='Password' required/>
                <div className="button">
                <Custombutton type="submit">Sign In</Custombutton>
                <Custombutton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</Custombutton>
                </div>
            </form>
        </div>
        );
    }
}

export default Signin;