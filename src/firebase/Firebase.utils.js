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

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;