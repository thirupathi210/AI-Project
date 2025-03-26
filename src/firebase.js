// firebase.js

import { initializeApp } from 'firebase/app'; // Use initializeApp to initialize Firebase
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration object
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

// Export app, auth, and db as needed
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; // Make sure app is exported
