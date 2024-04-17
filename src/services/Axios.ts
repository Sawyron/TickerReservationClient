import axios from 'axios';

const baseUrl =
  import.meta.env.VITE_RESERVATION_BASE_URL || 'http://localhost:5156/api';

const client = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
});

client.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Basic ${token}`;
  return config;
});

export default client;
