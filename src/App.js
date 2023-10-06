
import './App.css';
import React from 'react';
import HomePage from './Pages/Homepage/HomePage.Component';
import { Routes, Route,Navigate   } from 'react-router-dom';
import Shoppage from './Pages/Shoppage/Shoppage.component';
import Header from './Components/header/Header.component';
import SigninAndSingup from './Pages/Signin_and_Signup/Signin_and_signup.component';
import {auth, createUserProfileDocument} from './firebase/Firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {
  
  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot =>{
            setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
        });
      }
      else{
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }

  render(){
    return (
      <div >
        <Header/>
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route path='/shop' element={<Shoppage/>} />
            <Route exact path='/signIn' element={this.props.currentUser ? <Navigate   to='/' replace  /> : <SigninAndSingup/>}/>
          </Routes>
        {/* <HomePage/> */}
      </div>
    );
  }  
}

const mapStateToProps = ({user}) =>({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user =>dispatch(setCurrentUser(user))
})

export default connect (mapStateToProps,mapDispatchToProps)(App);
