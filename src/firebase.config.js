
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALL3orU96t4OklxaP4NHyrEHLw6zST_gQ",
  authDomain: "house-market-ab48c.firebaseapp.com",
  projectId: "house-market-ab48c",
  storageBucket: "house-market-ab48c.appspot.com",
  messagingSenderId: "807014701998",
  appId: "1:807014701998:web:fbf5d1a5c90ff702fdc63f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()
