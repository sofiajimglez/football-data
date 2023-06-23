import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import competitionsService from "../../../services/competitions.service";
import SeasonItem from "./SeasonItem";
import CompetitionHeader from "../header/CompetitionHeader";
import ErrorAlert from "../../errors/error-alert/ErrorAlert";
import BackToTopBtn from "../../top-btn/BackToTopBtn";
import Loading from "../../loading/Loading";

export default function CompetitionSeasons() {

  // Retrieve the "code" parameter from the URL to make the call to the api
  const { code } = useParams();

  // State variables for competition, seasons and fetch error message
  const [competition, setCompetition] = useState({});
  const [seasons, setSeasons] = useState([]);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {

    // Fetch competition data based on the provided code by useParams hook & extract seasons
    competitionsService.detail(code)
      .then(res => {
        setCompetition(res);
        setSeasons(res.seasons);
        setFetchError(''); // Reset the fetch error to an empty string
      })
      .catch(error => {
        console.error(error);

        // Set the fetch error with the corresponding error message
        setFetchError(error.response?.data?.message || error.message || 'An error occurred. Please, try again later.'); 
      })
  }, [code]);

  // Render the loading component while data is being fetched from the api
  if (Object.keys(competition).length === 0) return (<Loading />);

  return (
    <>
      <CompetitionHeader competition={competition} />

      {fetchError && <ErrorAlert message={fetchError} />}

      <h2 className="mt-5">Seasons</h2>

      <section className="table-responsive mt-3">
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
      </section>

      <BackToTopBtn />
    </>
  )
};