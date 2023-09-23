
import './App.css';
import React from 'react';
import HomePage from './Pages/Homepage/HomePage.Component';
import { Routes, Route } from 'react-router-dom';
import Shoppage from './Pages/Shoppage/Shoppage.component';
import Header from './Components/header/Header.component';
import SigninAndSingup from './Pages/Signin_and_Signup/Signin_and_signup.component';
import {auth} from './firebase/Firebase.utils'


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser : 'null'
    }
  }
  
  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log("skkk...user",user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
          <Routes>
            <Route exact path='/' Component={HomePage} />
            <Route path='/shop' Component={Shoppage} />
            <Route path='/signIn' Component={SigninAndSingup}/>
          </Routes>
        {/* <HomePage/> */}
      </div>
    );
  }  
}



export default App;
