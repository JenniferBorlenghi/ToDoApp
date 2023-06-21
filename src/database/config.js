import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlQvuthdHbPJt5uFgfGi9mHRaE7AUUbOw",
  authDomain: "todo-af4b6.firebaseapp.com",
  projectId: "todo-af4b6",
  storageBucket: "todo-af4b6.appspot.com",
  messagingSenderId: "191965322460",
  appId: "1:191965322460:web:4cd2fda1128fb87bf2a819",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db from firestore
export const db = getFirestore(app);
