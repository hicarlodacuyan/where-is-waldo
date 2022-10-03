import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD89TNNQPvqBN8PWw-lKe9N23q-EN-Fqbw",
  authDomain: "where-is-waldo-f4e26.firebaseapp.com",
  projectId: "where-is-waldo-f4e26",
  storageBucket: "where-is-waldo-f4e26.appspot.com",
  messagingSenderId: "484598585485",
  appId: "1:484598585485:web:0a54b94bafe67adca46ac4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
