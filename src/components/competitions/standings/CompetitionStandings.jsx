import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormattedYear } from "../../../utils/getFormattedYear";
import competitionsService from "../../../services/competitions.service";
import CompetitionHeader from "../header/CompetitionHeader";
import StandingItem from "./StandingItem";
import ErrorAlert from "../../errors/error-alert/ErrorAlert";
import SearchInput from "../../forms/search-input/SearchInput";

export default function CompetitionStandings() {

  const { code } = useParams();
  const [competition, setCompetition] = useState({});
  const [standings, setStandings] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [search, setSearch] = useState('');

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

  const startYear = getFormattedYear(competition?.currentSeason?.startDate);
  const endYear = getFormattedYear(competition?.currentSeason?.endDate);

  const onSearch = (value) => setSearch(value);

  const filteredTeams = standings.filter(elem => elem.team.name.toLowerCase().includes(search.toLowerCase()));

  if (standings.length === 0) return (<p>Loading...</p>);

  return (
    <>
      <CompetitionHeader competition={competition} />

      {fetchError && <ErrorAlert message={fetchError} />}

      <h2 className="mt-5">Standings</h2>

      <p className="mt-4 mb-0"><strong>Season:</strong> {startYear}/{endYear}</p>

      <SearchInput search={search} onSearch={onSearch} placeholder={"Search team..."} />

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
            {filteredTeams.map(standing => <StandingItem data={standing}  />)}
          </tbody>
        </table>
      </div>
      <p className="mt-3"><small>POS: Position — P: Points — W: Won matches — D: Drawn matches — L: Lost matches — GF: Goals for — GA: Goals against</small></p>
    </>
  )
}
