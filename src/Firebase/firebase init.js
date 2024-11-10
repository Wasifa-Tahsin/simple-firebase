// do not store config on the client site


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBci8ndVz1qZBHPOYpiDdnZUHu8fu8Edxw",
  authDomain: "simple-firebase-40338.firebaseapp.com",
  projectId: "simple-firebase-40338",
  storageBucket: "simple-firebase-40338.firebasestorage.app",
  messagingSenderId: "346640832262",
  appId: "1:346640832262:web:7826783fe3b6917e767087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth