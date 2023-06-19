import { Link } from "react-router-dom"

export default function CompetitionHeader({ competition }) {

  if (!competition) return (<p>Loading...</p>);

  return (
    <div>
      <h1>{competition.name}</h1>
      <Link to={`/competitions/${competition.id}/standings`}>See standings</Link>
    </div>
  )
}
