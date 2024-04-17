import axios from 'axios';

console.log(import.meta.env.RESARVATION_BASEURL);

const baseUrl =
  import.meta.env.RESARVATION_BASEURL || 'http://localhost:5156/api';

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
