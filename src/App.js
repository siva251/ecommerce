
import './App.css';
import React from 'react';
import HomePage from './Pages/Homepage/HomePage.Component';
import { Routes, Route } from 'react-router-dom';
import Shoppage from './Pages/Shoppage/Shoppage.component';
import Header from './Components/header/Header.component';
import SigninAndSingup from './Pages/Signin_and_Signup/Signin_and_signup.component';
import {auth, createUserProfileDocument} from './firebase/Firebase.utils'


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser : 'null'
    }
  }
  
  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      else{
        this.setState({currentUser : userAuth});
      }
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
