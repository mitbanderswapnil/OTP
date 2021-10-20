// import firebase from "firebase/compct/app";
// import "firebase/compact/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";
import { initializeApp } from 'firebase/app';
import 'firebase/auth'


// const firebaseApp = firebase.initializeApp({})
const firebaseConfig = {
    apiKey: "AIzaSyAP3WlprHU-GZW2LMNrWddZlrvyY_p8Gog",
    authDomain: "otp-app-7966b.firebaseapp.com",
    projectId: "otp-app-7966b",
    storageBucket: "otp-app-7966b.appspot.com",
    messagingSenderId: "474365245573",
    appId: "1:474365245573:web:0d2957469b0141c15911ec"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  
export default initializeApp ;


