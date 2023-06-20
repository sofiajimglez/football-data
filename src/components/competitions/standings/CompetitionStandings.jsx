import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import competitionsService from "../../../services/competitions.service";
import CompetitionHeader from "../header/CompetitionHeader";
import StandingItem from "./StandingItem";

export default function CompetitionStandings() {

  const { code } = useParams();
  const [competition, setCompetition] = useState({});
  const [standings, setStandings] = useState([]);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const competitionData = await competitionsService.detail(code);
        setCompetition(competitionData);

        const standingsData = await competitionsService.standings(competitionData.id);
        const standingsTable = standingsData.standings.map(elem => elem.table).flat();
        setStandings(standingsTable);

      } catch (error) {
        console.error(error);
        setFetchError(error.message);
      }
    }

    setFetchError('');
    fetchData();

  }, [code]);

  console.log(standings)

  if (standings.length === 0) return (<p>Loading...</p>);

  return (
    <div>
      <CompetitionHeader competition={competition} />

      {fetchError && (<div className="alert alert-danger" role="alert">
        <p>An error occurred while loading the matches! 😥 Please, try again later.</p>
        <br /><small>{fetchError}</small>
      </div>)}

      {standings.map(standing => <StandingItem data={standing} key={standing.position} />)}
    </div>
  )
}
