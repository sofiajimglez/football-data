import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import './header.css';

export default function CompetitionHeader({ competition }) {

  const startDate = dayjs(competition.currentSeason.startDate);
  const startYear = startDate.year();
  const endDate = dayjs(competition.currentSeason.endDate);
  const endYear = endDate.year();

  if (!competition) return (<p>Loading...</p>);

  return (
    <div className="competition-header d-flex flex-column flex-sm-row flex-wrap gap-4 align-items-center">
      <div>
        <img src={competition.emblem} alt={`${competition.name} logo`} width={120} />
      </div>
      <div className="d-flex flex-wrap flex-row flex-sm-column">
        <h1>{competition.name}</h1>
        <div className="d-flex flex-wrap align-items-center gap-2 mt-1">
          <img src={competition.area.flag} alt={`${competition.area.name} logo`} height={20} />
          <p className="mb-0 me-2">{competition.area.name}</p>
          <p className="mb-0"> <strong>Current season:</strong> {startYear}/{endYear}</p>
          <p className="mb-0"> <strong>Current matchday:</strong> {competition.currentSeason.currentMatchday}</p>
        </div>
        <div className="d-flex flex-wrap gap-3 mt-3">
          <Link to={`/competitions/${competition.code}`} className="btn btn-main">Seasons</Link>
          <Link to={`/competitions/${competition.code}/standings`}  className="btn btn-main">Standings</Link>
          <Link to={`/competitions/${competition.code}/matches`}  className="btn btn-main">Matches</Link>
        </div>
      </div>
    </div>
  )
}
