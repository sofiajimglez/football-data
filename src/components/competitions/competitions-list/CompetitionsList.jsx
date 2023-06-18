import { useEffect, useState } from "react";
import competitionsService from "../../../services/competitions.service";
import CompetitionItem from "../competition-item/CompetitionItem";

export default function CompetitionsList() {

  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    competitionsService.list()
    .then(res => {
      const competitionsList = res.competitions;
      const leagues = competitionsList.filter(competition => competition.type === 'LEAGUE');
      setCompetitions(leagues)
    })
    .catch(console.error)
  }, []);

  if (competitions.length === 0) return (<p>Loading...</p>);

  return (
    <div>
      <h2>Competitions List</h2>
      {competitions.map(elem => <CompetitionItem key={elem.id} competition={elem} />)}
    </div>
  )
}
