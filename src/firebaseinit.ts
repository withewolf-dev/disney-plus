// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqNwlUZgYg1aS4Sfs9k55NSFnUNK-Tg8A",
  authDomain: "disney-clone-123d4.firebaseapp.com",
  projectId: "disney-clone-123d4",
  storageBucket: "disney-clone-123d4.appspot.com",
  messagingSenderId: "526563174618",
  appId: "1:526563174618:web:ed304df93e34fa1a609de3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
export const auth = getAuth(app);
export default firestore;
