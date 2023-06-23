import http from './base-api';

/**
 * Fetches a list of competitions
 * @returns {Promise} A promise that resolves to the list of competitions
 */
const list = () => http.get('/competitions');

/**
 * Fetches the details of a competition by its code
 * @param {string} code - The code of the competition
 * @returns {Promise} A promise that resolves to the details of the competition
 */
const detail = (code) => http.get(`/competitions/${code}`);

/**
 * Fetches the standings of a competition by the competition id
 * @param {string} id - The id of the competition
 * @returns {Promise} A promise that resolves to the standings of the competition
 */
const standings = (id) => http.get(`/competitions/${id}/standings`);

/**
 * Fetches the matches of a competition by the competition id
 * @param {string} id - The id of the competition
 * @returns {Promise} A promise that resolves to the matches of the competition
 */
const matches = (id) => http.get(`/competitions/${id}/matches`);

export default {
  list,
  detail,
  standings,
  matches
};