// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoCmnnShZ-lL2Q6yD9GE5sJcDRuNIPTBY",
  authDomain: "uber-next-clone-live-d0da8.firebaseapp.com",
  projectId: "uber-next-clone-live-d0da8",
  storageBucket: "uber-next-clone-live-d0da8.appspot.com",
  messagingSenderId: "169031145312",
  appId: "1:169031145312:web:15a485c4959b02ac00f005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}