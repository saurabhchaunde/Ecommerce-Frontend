// src/components/LoginService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080';  // Replace with your backend URL

// The login function sends a POST request to the /login endpoint
export const login = async (user) => {
    try {
        // Sending the user object to the server for login authentication
        const response = await axios.post(`${API_URL}/login`, user);
        
        // Check if the server responded with a valid token
        if (response.data && response.data.token) {
            // Store the JWT token in localStorage for future requests
            localStorage.setItem('token', response.data.token);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
};
