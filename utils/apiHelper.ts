import axios from 'axios';

// dotenv.config();

const API_BASE_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_MODE === 'prod' ? process.env.NEXT_PUBLIC_AWS_ENDPOINT : 'http://localhost:3000/api';
const EMAIL_API_URL = process.env.NEXT_PUBLIC_CONTACT_API;

export const apiInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const emailApiInstance = axios.create({
    baseURL: EMAIL_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})