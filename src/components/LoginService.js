import axios from 'axios';

const API_URL = 'http://localhost:8080';  // Replace with your backend URL

// Login function
export const login = async (user) => {
    try {
        const response = await axios.post(`${API_URL}/login`, user);
        if (response.data) {
            // Save the token or user info if needed
            localStorage.setItem('token', response.data.token);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Login error', error);
        return false;
    }
};
