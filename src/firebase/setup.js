// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEYHQP1Ch0uG_jQSQpviWBZmvhPjh9t00",
  authDomain: "netflix-copycat-6342f.firebaseapp.com",
  projectId: "netflix-copycat-6342f",
  storageBucket: "netflix-copycat-6342f.appspot.com",
  messagingSenderId: "580037994425",
  appId: "1:580037994425:web:a2bd52cf3200181a2af868"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);