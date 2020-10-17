import axios from 'axios';

const api = axios.create({
    //if you are using an emulator
    //baseURL: 'hrrp://localhost:3333', 
    //if you are using a physical device, use expo connection LAN 
    baseURL: 'http://10.0.0.108:3333', 
});

export default api;