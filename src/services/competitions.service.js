import http from './base-api';

const list = () => http.get('/competitions');

export default {
  list
};