import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For redirecting in React Router
import { login } from './LoginService';  // Assuming the login function is in LoginService.js

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  // Hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault();

        // Create a user object to send to the backend
        const user = { username, password };

        try {
            const success = await login(user);  // Call your login function

            if (success) {
                // Redirect to the home page or protected route
                navigate('/home');  // Using React Router's navigate hook for redirection
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (err) {
            setError('An error occurred during login. Please try again.');
            console.error('Login Error:', err);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}  {/* Display error message */}
        </div>
    );
};

export default Login;
