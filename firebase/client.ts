import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbwLH7RhW8IUlzUyqJ-RtAkA5ITB-SPcQ",
  authDomain: "prepwise-ce894.firebaseapp.com",
  projectId: "prepwise-ce894",
  storageBucket: "prepwise-ce894.firebasestorage.app",
  messagingSenderId: "494645251813",
  appId: "1:494645251813:web:31c041bcd7afe81052ce0c",
  measurementId: "G-88JWLPEKPY",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
