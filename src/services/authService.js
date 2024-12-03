import axios from 'axios';

const API_URL = 'http://localhost:8080';

const register = async (user) => {
    try {
        const response = await axios.post(`${API_URL}/register`, user);
        return response.data;
    } catch (error) {
        throw new Error('Error registering user:', error);
    }
};

// const login = async (user) => {
//     try {
//         const response = await axios.post(`${API_URL}/login`, user);
//         return response.data;
//     } catch (error) {
//         throw new Error('Error logging in user:', error);
//     }
// };

const login = async (user) => {
    try {
        // Sending the login request to the backend
        const response = await axios.post(`${API_URL}/login`, user);

        // Extracting the token from the response
        const token = response.data;

        // If the login is successful, save the token
        if (token !== 'fail') {
            // Save the token in localStorage or sessionStorage
            localStorage.setItem('jwtToken', token);  // Use localStorage to persist across sessions
            return true;
        } else {
            console.error('Login failed');
            return false;
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        return false;
    }
};

export default { register, login };
