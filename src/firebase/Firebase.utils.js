import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyB19t4grpWlp_eKnwnUvEp_I866B3K26Tc",
    authDomain: "ecommerce-f3ea5.firebaseapp.com",
    projectId: "ecommerce-f3ea5",
    storageBucket: "ecommerce-f3ea5.appspot.com",
    messagingSenderId: "641182984793",
    appId: "1:641182984793:web:c95f438ed0957287911f48",
    measurementId: "G-CL1EYGV38B"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); 

    if(!snapShot.exists){
      const {displayName, email}= userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
        })
      }
      catch (error){
        console.log("Error In Creating User", error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;