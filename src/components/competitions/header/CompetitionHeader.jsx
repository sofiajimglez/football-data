import { Link } from "react-router-dom";
import { getFormattedYear } from "../../../utils/getFormattedYear";
import Loading from "../../loading/Loading";
import './header.css';

export default function CompetitionHeader({ competition }) {

  // Retrieve the formatted start and end years of the competition's current season
  const startYear = getFormattedYear(competition.currentSeason.startDate);
  const endYear = getFormattedYear(competition.currentSeason.endDate);

  // Render the loading component while data is being fetched from the api
  if (!competition) return (<Loading />);

  return (
    <section className="competition-header d-flex flex-column flex-sm-row flex-wrap gap-4 align-items-center">

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

        <div className="d-flex flex-wrap gap-3 mt-4">
          <Link to={`/competitions/${competition.code}`} className="btn btn-main">Seasons</Link>
          <Link to={`/competitions/${competition.code}/standings`}  className="btn btn-main">Standings</Link>
          <Link to={`/competitions/${competition.code}/matches`}  className="btn btn-main">Matches</Link>
        </div>
      </div>

    </section>
  )
};

CompetitionHeader.defaultProps = {
  competition: {}
};
