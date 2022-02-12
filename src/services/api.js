import axios from 'axios';

export const key = "6e401d2f7f36bfb3896ae09468fadf411ad450ec";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;