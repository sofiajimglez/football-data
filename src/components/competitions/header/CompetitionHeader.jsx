import { Link } from "react-router-dom"

export default function CompetitionHeader({ competition }) {

  if (!competition) return (<p>Loading...</p>);

  return (
    <div>
      <h1>{competition.name}</h1>
      <div className="d-flex gap-2 mb-3">
        <Link to={`/competitions/${competition.code}`}>See seasons</Link>
        <Link to={`/competitions/${competition.code}/standings`}>See standings</Link>
        <Link to={`/competitions/${competition.code}/matches`}>See matches</Link>
      </div>
    </div>
  )
}
