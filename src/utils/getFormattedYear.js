import dayjs from 'dayjs';

export function getFormattedYear(date) {
  const formattedDate = dayjs(date);
  return formattedDate.year();
}