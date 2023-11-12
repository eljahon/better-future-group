

import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const fetchData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
