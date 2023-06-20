import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import competitionsService from "../../../services/competitions.service";
import SeasonItem from "./SeasonItem";
import CompetitionHeader from "../header/CompetitionHeader";
import ErrorAlert from "../../errors/error-alert/ErrorAlert";

export default function CompetitionSeasons() {

  const { code } = useParams();
  const [competition, setCompetition] = useState({});
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    competitionsService.detail(code)
      .then(res => {
        setCompetition(res);
        setFetchError('');
      })
      .catch(error => {
        console.error(error);
        setFetchError(error.response?.data?.message);
      })
  }, [code]);

  const seasons = competition.seasons;

  if (Object.keys(competition).length === 0) return (<p>Loading...</p>);

  return (
    <div>
      <CompetitionHeader competition={competition} />

      {fetchError && <ErrorAlert message={fetchError} />}

      {seasons.map(season => <SeasonItem key={season.id} season={season} />)}
    </div>
  )
}