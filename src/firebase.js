import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrSgFvtwu45keu3M52c4mymjhqjCaYvIs",
  authDomain: "react-redux-8173c.firebaseapp.com",
  projectId: "react-redux-8173c",
  storageBucket: "react-redux-8173c.firebasestorage.app",
  messagingSenderId: "35275303980",
  appId: "1:35275303980:web:71c9d7efd697b63cf57589"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
