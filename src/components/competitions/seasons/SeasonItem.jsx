import dayjs from 'dayjs';

export default function SeasonItem({ season, index }) {

  const startDate = dayjs(season.startDate);
  const startYear = startDate.year();
  const endDate = dayjs(season.endDate);
  const endYear = endDate.year();

  return (
    <tr>
      <td>{startYear} / {endYear}</td>
      <td>{season.winner?.name ? (<><img src={season.winner.crest} alt={`${season.winner.shortName} crest`} height={20} /> {season.winner.name} </>) : '—'}</td>
    </tr>
  )
}
