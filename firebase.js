// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYSkXGJQoU86Rb97TzJugP5HGnfUGZaCw",
  authDomain: "flashcards-cb94a.firebaseapp.com",
  projectId: "flashcards-cb94a",
  storageBucket: "flashcards-cb94a.appspot.com",
  messagingSenderId: "469267919171",
  appId: "1:469267919171:web:dbada29c19c91716233ff6",
  measurementId: "G-6TK9E8K675",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};