import MatchItem from "./MatchItem";

export default function MatchdayGroup({ day, matches }) {
  return (
    <section>
      <h3>Matchday {day}</h3>
      {matches.map(match => <MatchItem key={match.id} match={match} />)}
    </section>
  )
}
