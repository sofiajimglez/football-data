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
    <>
      <CompetitionHeader competition={competition} />

      {fetchError && <ErrorAlert message={fetchError} />}

      <h2 className="mt-5">Standings</h2>

      <div className="table-responsive mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">POS</th>
              <th scope="col">TEAM</th>
              <th scope="col">P</th>
              <th scope="col">W</th>
              <th scope="col">D</th>
              <th scope="col">L</th>
              <th scope="col">GF</th>
              <th scope="col">GA</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {standings.map(standing => <StandingItem data={standing} key={standing.position} />)}
          </tbody>
        </table>
        <p className="mt-3"><small>POS: Position — P: Points — W: Won matches — D: Drawn matches — L: Lost matches — GF: Goals for — GA: Goals against</small></p>
      </div>
    </>
  )
}
