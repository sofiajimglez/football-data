import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import competitionsService from "../../../services/competitions.service";
import CompetitionHeader from "../header/CompetitionHeader";
import StandingItem from "./StandingItem";

export default function CompetitionStandings() {

  const { code } = useParams();
  const [competition, setCompetition] = useState({});
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    competitionsService.detail(code)
      .then(res => setCompetition(res))
      .catch(console.error)
  }, [code]);

  useEffect(() => {
    if (competition.id) {
      competitionsService.standings(competition.id)
        .then(res => {
          const data = res.standings.map(elem => elem.table).flat();
          setStandings(data);
        })
        .catch(console.error);
    }
  }, [competition.id]);

  if (standings.length === 0) return (<p>Loading...</p>);

  console.log(standings)

  return (
    <div>
      <CompetitionHeader competition={competition} />
      {standings.map(standing => <StandingItem key={standing.id} data={standing} />)}
    </div>
  )
}
