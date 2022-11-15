import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signinWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAhXKCJODrrpumyGLhP6ZpsovF_nx4Ar4",
  authDomain: "react-portfolio-display-dash.firebaseapp.com",
  projectId: "react-portfolio-display-dash",
  storageBucket: "react-portfolio-display-dash.appspot.com",
  messagingSenderId: "32460760545",
  appId: "1:32460760545:web:28ca809d0713ec40e25ea0",
  measurementId: "G-44QX5DYS7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signinWithPopup(auth, provider)