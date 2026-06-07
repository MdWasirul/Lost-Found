import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true // This allows the browser to send/receive the secure JWT cookie
});

export default API;