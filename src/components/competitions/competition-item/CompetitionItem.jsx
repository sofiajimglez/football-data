import { Link } from "react-router-dom";

export default function CompetitionItem({ competition }) {
  return (
    <div className="d-flex gap-2 align-items-baseline">
      {/* <img src={competition.emblem} alt={`${competition.name} logo`} /> */}
      <p>{competition.name}</p>
      <Link to={`/competitions/${competition.code}`} >More info</Link>
    </div>
  )
}
