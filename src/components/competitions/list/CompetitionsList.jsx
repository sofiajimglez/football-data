import { useEffect, useState } from "react";
import competitionsService from "../../../services/competitions.service";
import CompetitionItem from "./CompetitionItem";
import ErrorAlert from "../../errors/error-alert/ErrorAlert";

export default function CompetitionsList() {

  const [competitions, setCompetitions] = useState([]);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    competitionsService.list()
    .then(res => {
      const competitionsList = res.competitions;
      const leagues = competitionsList.filter(competition => competition.type === 'LEAGUE');
      setCompetitions(leagues);
      setFetchError('');
    })
    .catch(error => {
      console.error(error);
      setFetchError(error.response?.data?.message);
    })
  }, []);

  if (competitions.length === 0) return (<p>Loading...</p>);

  return (
    <div>
      <h2>Competitions List</h2>

      {fetchError && <ErrorAlert message={fetchError} />}

      {competitions.map(elem => <CompetitionItem key={elem.id} competition={elem} />)}
    </div>
  )
}
