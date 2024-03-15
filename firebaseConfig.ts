// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH3cNP8U4l0SYJH63nfNup1YmDPE0YUbs",
  authDomain: "auth-firebase-3a177.firebaseapp.com",
  projectId: "auth-firebase-3a177",
  storageBucket: "auth-firebase-3a177.appspot.com",
  messagingSenderId: "309527619421",
  appId: "1:309527619421:web:a149ebefd32e7740e6aab4"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);