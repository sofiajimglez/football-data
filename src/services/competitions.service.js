import http from './base-api';

const list = () => http.get('/competitions');

const detail = (code) => http.get(`/competitions/${code}`);

export default {
  list,
  detail
};