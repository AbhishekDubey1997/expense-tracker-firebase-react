// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGIjSQd2stL6zscqPW7roIRrK7qrx3qX4",
  authDomain: "expense-tracker-a3991.firebaseapp.com",
  projectId: "expense-tracker-a3991",
  storageBucket: "expense-tracker-a3991.appspot.com",
  messagingSenderId: "596470376843",
  appId: "1:596470376843:web:e4dce29f405ae2241fe78e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore (app);

