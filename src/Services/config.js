import axios from 'axios'
const URL ='https://admin315.vercel.app/api/v1'
export const https = axios.create({
    baseURL: URL
})