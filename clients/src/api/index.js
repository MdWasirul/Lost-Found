import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true // This allows the browser to send/receive the secure JWT cookie
});

export default API;