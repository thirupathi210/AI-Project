import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOoehhzlbmCWvSxJvnHy2s_jqnLyFbkPc",
  authDomain: "chat-8f988.firebaseapp.com",
  projectId: "chat-8f988",
  storageBucket: "chat-8f988.firebasestorage.app",
  messagingSenderId: "12637634274",
  appId: "1:12637634274:web:45671f8912ddc5b231a8bb",
  measurementId: "G-FF8D9L7FTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { app }; // ✅ Export the initialized app
