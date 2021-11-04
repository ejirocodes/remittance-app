import axios from 'axios';

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
});