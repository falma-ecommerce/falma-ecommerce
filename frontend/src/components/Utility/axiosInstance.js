import axios from 'axios';

const axiosApiInstance = axios.create();

// axiosApiInstance.defaults.baseURL = 'http://localhost:5000';
axiosApiInstance.defaults.withCredentials = true;

export default axiosApiInstance;