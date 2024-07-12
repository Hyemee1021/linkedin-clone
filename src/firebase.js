// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZuB7QFqtOESBvzF9ITOK73QX5eQ6qznA",
  authDomain: "kinkedin-clone.firebaseapp.com",
  projectId: "kinkedin-clone",
  storageBucket: "kinkedin-clone.appspot.com",
  messagingSenderId: "55080021625",
  appId: "1:55080021625:web:c98c311144235273ddeea8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Initialize Auth
const auth = getAuth(firebaseApp);

export { db, auth };
