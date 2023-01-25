import axios from 'axios';

export const api = axios.create({
    // baseURL: 'http://192.168.1.127:3333' // casa
    baseURL: 'http://172.20.10.12:3333' // 4G
})