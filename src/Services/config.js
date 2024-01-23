import axios from 'axios'
const URL ='https://63960758a68e43e418f8d85c.mockapi.io/data315'
export const https = axios.create({
    baseURL: URL
})