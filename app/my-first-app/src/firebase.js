// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBybjS9q0IDw-1lRa23B1ookyYubt7zchU",
  authDomain: "getaway-8a0b2.firebaseapp.com",
  projectId: "getaway-8a0b2",
  storageBucket: "getaway-8a0b2.appspot.com",
  messagingSenderId: "831601888370",
  appId: "1:831601888370:web:dda7416b37f160390646eb"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// this exports the CONFIGURED version of firebase
export default firebase;