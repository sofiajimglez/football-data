import { getFormattedYear } from "../../../utils/getFormattedYear";

export default function SeasonItem({ season }) {

  const startYear = getFormattedYear(season.startDate);
  const endYear = getFormattedYear(season.endDate);

  return (
    <tr>
      <td>{startYear} / {endYear}</td>
      <td>{season.winner?.name ? (<><img src={season.winner.crest} alt={`${season.winner.shortName} crest`} height={20} /> {season.winner.name} </>) : '—'}</td>
    </tr>
  )
}
