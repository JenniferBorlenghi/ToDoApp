import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBySwSOEVdp7BiM0gDRD9kYSx8tP5NxSuk",
  authDomain: "todoapp---js4.firebaseapp.com",
  projectId: "todoapp---js4",
  storageBucket: "todoapp---js4.appspot.com",
  messagingSenderId: "162658398984",
  appId: "1:162658398984:web:3a8a73ef03c935f018f2bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db from firestore
export const db = getFirestore(app);
