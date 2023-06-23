import dayjs from 'dayjs';

/**
 * Returns the formatted year of a given date.
 * 
 * @param {Date|String|Number} date - Input from which the year will be extracted // 2023-06-23
 * @returns {number} The formatted year of the input date // 2023
 */
export function getFormattedYear(date) {
  const formattedDate = dayjs(date);
  return formattedDate.year();
}