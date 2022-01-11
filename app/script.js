// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1GGuN2TUIhv_2btzNvtvdYUWDwCrfUsE",
  authDomain: "cottage-fc0aa.firebaseapp.com",
  databaseURL: "https://cottage-fc0aa-default-rtdb.firebaseio.com",
  projectId: "cottage-fc0aa",
  storageBucket: "cottage-fc0aa.appspot.com",
  messagingSenderId: "562282378611",
  appId: "1:562282378611:web:3c6b1b3198b8437ea70106",
  measurementId: "G-BSNB3M2ZE0"
};

// Initialize Firebase
const app =  firebase.initializeApp(firebaseConfig);

console.log(app)