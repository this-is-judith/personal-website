// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxHrOW7nIGzqynOliWO9LBl1Fdgg4AZGM",
  authDomain: "judith-s-personal-website.firebaseapp.com",
  projectId: "judith-s-personal-website",
  storageBucket: "judith-s-personal-website.appspot.com",
  messagingSenderId: "588267038280",
  appId: "1:588267038280:web:9d619cfb9ced1fd613da7d",
  measurementId: "G-BRJTRPRL10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);