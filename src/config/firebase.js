// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-iiHo8xs9koBdAXauZn5aKbwWAPUXkaE",
  authDomain: "shop-app-db2ee.firebaseapp.com",
  projectId: "shop-app-db2ee",
  storageBucket: "shop-app-db2ee.appspot.com",
  messagingSenderId: "630723904475",
  appId: "1:630723904475:web:5303b33d3055f835dc9dfe",
  measurementId: "G-M51ZJRTCZB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, googleProvider, db };
