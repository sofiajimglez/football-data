export default function StandingItem({ data }) {
  return (
    <tr>
      <td className="text-center">{data.position}</td>
      <td><img src={data.team.crest} alt={`${data.team.shortName} crest`} height={20} /> {data.team.name}</td>
      <td><strong>{data.points}</strong></td>
      <td>{data.won}</td>
      <td>{data.draw}</td>
      <td>{data.lost}</td>
      <td>{data.goalsFor}</td>
      <td>{data.goalsAgainst}</td>
    </tr>
  )
}
