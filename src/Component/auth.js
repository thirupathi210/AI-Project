import React from 'react'
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from './ChatApplication/firebaseConfig';

const Auth = ({ setUser }) => {

    const signIn = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          setUser(result.user);
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div className="p-5">
    <button onClick={signIn} className="bg-blue-500 text-white px-4 py-2 rounded">
      Sign in with Google
    </button>
  </div>
  )
}

export default Auth;
