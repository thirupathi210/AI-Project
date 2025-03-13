import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase'; // Ensure you are importing app correctly

const Task7 = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const signUp = async (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up:', userCredential.user);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const signIn = async (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in:', userCredential.user);
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <div>
            <style>
                {`
                    button {
                        width: 10%;
                        padding: 10px;
                        margin: 10px;
                    }
                `}
            </style>
            <h1>Authentication</h1>
            <form>
                <input
                    type="email"
                    placeholder="username"
                    name="email"
                    value={email}
                    onChange={changeHandler}
                />
                <br />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={changeHandler}
                />
                <br />
                <button onClick={signIn}>Login</button>
                <button onClick={signUp}>Sign Up</button>
            </form>
        </div>
    );
};

export default Task7;
