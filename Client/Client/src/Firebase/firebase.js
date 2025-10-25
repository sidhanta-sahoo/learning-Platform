// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDWoHT16O6LRdJqH452MjLXsSCwh3B1LTU",
  authDomain: "authproject-70e33.firebaseapp.com",
  projectId: "authproject-70e33",
  storageBucket: "authproject-70e33.appspot.com",
  messagingSenderId: "134153339792",
  appId: "1:134153339792:web:171ad7cfa441ac59972915",
  measurementId: "G-H1SJTFN4D5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
