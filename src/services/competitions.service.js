import http from './base-api';

const list = () => http.get('/competitions');

const detail = (code) => http.get(`/competitions/${code}`);

const standings = (id) => http.get(`/competitions/${id}/standings`);

const matches = (id) => http.get(`/competitions/${id}/matches`);

export default {
  list,
  detail,
  standings,
  matches
};