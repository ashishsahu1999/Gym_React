// CoreApi.jsx
import { message } from 'antd';
import API from './Api';

// Function to handle user registration
export const PostSignup = async (values) => {
    try {
        const response = await API.post('api/signup/', values, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data; // Return the response data on success
    } catch (err) {
        message.error('Registration Failed: ' + (err.response?.data?.message || err.message));
        return {}; // Return an empty object or handle error appropriately
    }
};

// Function to handle user login
export const PostLogin = async (values) => {
    try {
        const response = await API.post('api/login/', values, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data; // Return the response data on success
    } catch (err) {
        message.error('Login Failed: ' + (err.response?.data?.message || err.message));
        return {}; // Return an empty object or handle error appropriately
    }
};
