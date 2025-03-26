import React, { useState } from 'react';
import { signUp } from '../../Actions'; // Ensure the correct path
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const registerUser = async (e) => {
        e.preventDefault(); // Prevent page refresh

        const user = {
            firstname,
            lastname,
            email,
            password
        };

        console.log("Form Submitted:", user); // Log input data

        try {
            await dispatch(signUp(user)); // Dispatch to Redux

            alert("Signup successful!"); // Show success message
            
            // Clear input fields after successful submission
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
        } catch (error) {
            alert("Signup failed: " + error.message);
        }
    };

    return (
        <div className="login-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="card" style={{ padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', maxWidth: '400px', width: '100%' }}>
                <h1 className="text-center">Sign-Up</h1>
                <form className="login-form" onSubmit={registerUser}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" className="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
