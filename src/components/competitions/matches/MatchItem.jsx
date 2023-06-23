import './matches.css';

export default function MatchItem({ match }) {
  return (
    <tr>
      <td className="text-end" width={400}>
        {match.homeTeam.name} 
        <img src={match.homeTeam.crest} alt={`${match.homeTeam.shortName} crest`} height={20} className="mx-3 d-none d-sm-inline"/>
      </td>
      <td className="text-center" width={150}>
        <span className="score-info d-block text-nowrap p-1">
          {match.score.fullTime.home} — {match.score.fullTime.away}
        </span>
      </td>
      <td className="text-start" width={400}>
        <img src={match.awayTeam.crest} alt={`${match.awayTeam.shortName} crest`} height={20} className="mx-3 d-none d-sm-inline" /> 
        {match.awayTeam.name}
      </td>
    </tr>
  )
};

MatchItem.defaultProps = {
  match: {}
};
