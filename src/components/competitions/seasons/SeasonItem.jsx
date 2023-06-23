import { getFormattedYear } from "../../../utils/getFormattedYear";

export default function SeasonItem({ season }) {

  // Retrieve the formatted start and end years of the competition's current season
  const startYear = getFormattedYear(season.startDate);
  const endYear = getFormattedYear(season.endDate);

  return (
    <tr>
      <td>
        {startYear} / {endYear}
      </td>
      <td>
        {season.winner?.name ?
          <><img src={season.winner.crest} alt={`${season.winner.shortName} crest`} height={20} className="me-2" /> {season.winner.name}</>
          : '—'}
      </td>
    </tr>
  )
};

SeasonItem.defaultProps = {
  season: {}
};
