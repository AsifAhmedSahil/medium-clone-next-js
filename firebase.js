// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider  } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlcR0_t6ljxX8T3O5fMG6wX7mZnZg_xGw",
  authDomain: "medium-clone-d7e34.firebaseapp.com",
  projectId: "medium-clone-d7e34",
  storageBucket: "medium-clone-d7e34.appspot.com",
  messagingSenderId: "711542230504",
  appId: "1:711542230504:web:07478790e832652d53685d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export {auth,provider,db}