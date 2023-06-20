import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import competitionsService from "../../../services/competitions.service";
import CompetitionHeader from "../header/CompetitionHeader";
import StandingItem from "./StandingItem";
import ErrorAlert from "../../errors/error-alert/ErrorAlert";

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

        setFetchError('');

      } catch (error) {
        console.error(error);
        setFetchError(error.response?.data?.message);
      }
    }
    
    fetchData();

  }, [code]);

  if (standings.length === 0) return (<p>Loading...</p>);

  return (
    <div>
      <CompetitionHeader competition={competition} />

      {fetchError && <ErrorAlert message={fetchError} />}

      {standings.map(standing => <StandingItem data={standing} key={standing.position} />)}
    </div>
  )
}
