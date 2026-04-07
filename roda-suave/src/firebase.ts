import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHah66zXfhzSlCBexfiSbD_-0RoeNw3NU",
  authDomain: "roda-suave.firebaseapp.com",
  projectId: "roda-suave",
  storageBucket: "roda-suave.firebasestorage.app",
  messagingSenderId: "936245942787",
  appId: "1:936245942787:web:5e840b5d3216a78051cc36",
  measurementId: "G-4E1FFZXTC1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);