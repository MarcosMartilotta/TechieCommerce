import axios from 'axios';
import config from '../config';

export const makeRequest = axios.create({
  baseURL: config.REACT_APP_API_URL,
  headers: { Authorization: 'bearer ' + config.REACT_APP_API_TOKEN },
});
