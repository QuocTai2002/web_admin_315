import axios from 'axios'
const URL ='http://localhost:8888/api/v1'
export const https = axios.create({
    baseURL: URL
})