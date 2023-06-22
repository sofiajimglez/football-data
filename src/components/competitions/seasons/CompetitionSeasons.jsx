import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import competitionsService from "../../../services/competitions.service";
import SeasonItem from "./SeasonItem";
import CompetitionHeader from "../header/CompetitionHeader";
import ErrorAlert from "../../errors/error-alert/ErrorAlert";
import BackToTopBtn from "../../top-btn/BackToTopBtn";

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
    <>
      <CompetitionHeader competition={competition} />

      {fetchError && <ErrorAlert message={fetchError} />}

      <h2 className="mt-5">Seasons</h2>

      <div className="table-responsive mt-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Total seasons: {seasons.length}</th>
              <th scope="col">Winner</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {seasons.map((season, i) => <SeasonItem key={season.id} season={season} index={i + 1} />)}
          </tbody>
        </table>
      </div>

      <BackToTopBtn />
    </>
  )
}