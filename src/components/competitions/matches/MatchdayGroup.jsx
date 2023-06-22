import MatchItem from "./MatchItem";

export default function MatchdayGroup({ day, matches }) {
  return (
    <section className="mt-4">
      <h3>Matchday {day}</h3>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <tbody>
            {matches.map(match => <MatchItem key={match.id} match={match} />)}
          </tbody>
        </table>
      </div>
    </section>
  )
}
