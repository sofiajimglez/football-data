import { Link } from "react-router-dom";

export default function CompetitionItem({ competition }) {
  return (
    <div className="competition-card mt-2 flex-fill col-lg-3 col-md-12 col-sm-12 p-4 align-items-center">
      <div className="d-flex align-items-center gap-4">
        <div>
          <img src={competition.emblem} alt={`${competition.name} logo`} width={70} />
        </div>
        <div>
          <h3 className="mb-0 fs-5">{competition.name}</h3>
          <div className="d-flex align-items-center gap-2 mt-1">
            <img src={competition.area.flag} alt={`${competition.area.name} logo`} height={10} />
            <p className="mb-0">{competition.area.name}</p>
          </div>
          <div className="btn-group btn-group-sm mt-3" role="group">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-main-xs px-4 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">more info</button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={`/competitions/${competition.code}`}>Seasons</Link></li>
                <li><Link className="dropdown-item" to={`/competitions/${competition.code}/standings`}>Standings</Link></li>
                <li><Link className="dropdown-item" to={`/competitions/${competition.code}/matches`}>Matches</Link></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
