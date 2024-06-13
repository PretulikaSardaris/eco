import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvAJPrvdW7_XWNmW8R9GF8d3WWEb5W5bA",
  authDomain: "shopping-window-54e77.firebaseapp.com",
  projectId: "shopping-window-54e77",
  storageBucket: "shopping-window-54e77.appspot.com",
  messagingSenderId: "1040925570867",
  appId: "1:1040925570867:web:6cc987dd7b0af7e1f1f046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()