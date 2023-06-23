import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from 'nanoid';
import { getFormattedYear } from "../../../utils/getFormattedYear";
import competitionsService from "../../../services/competitions.service";
import CompetitionHeader from "../header/CompetitionHeader";
import StandingItem from "./StandingItem";
import ErrorAlert from "../../errors/error-alert/ErrorAlert";
import SearchInput from "../../forms/search-input/SearchInput";
import BackToTopBtn from "../../top-btn/BackToTopBtn";
import Loading from "../../loading/Loading";

export default function CompetitionStandings() {

  // Retrieve the "code" parameter from the URL to make the call to the api
  const { code } = useParams();

  // State variables for competition, standings, fetch error message and search input
  const [competition, setCompetition] = useState({});
  const [standings, setStandings] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {

        // Fetch competition data based on the provided code by useParams hook
        const competitionData = await competitionsService.detail(code);
        setCompetition(competitionData);

        // Fetch standings data for the competition
        const standingsData = await competitionsService.standings(competitionData.id);

        // Extract the standings table from the standings data
        const standingsTable = standingsData.standings.map(elem => elem.table).flat();
        setStandings(standingsTable);

        setFetchError(''); // Reset fetch error to empty string

      } catch (error) {
        console.error(error);

        // Set the fetch error with the corresponding error message
        setFetchError(error.response?.data?.message || error.message || 'An error occurred. Please, try again later.'); 
      }
    }

    // Fetch data when the component mounts
    fetchData();

  }, [code]);

  // Retrieve the formatted start and end years of the competition's current season
  const startYear = getFormattedYear(competition?.currentSeason?.startDate);
  const endYear = getFormattedYear(competition?.currentSeason?.endDate);

  // Filter the standings array based on the select criteria & store them in a variable
  const onSearch = (value) => setSearch(value);
  const filteredTeams = standings.filter(elem => elem.team.name.toLowerCase().includes(search.toLowerCase()));

  // Render the loading component while data is being fetched from the api
  if (standings.length === 0) return (<Loading />);

  return (
    <>
      <CompetitionHeader competition={competition} />

      {fetchError && <ErrorAlert message={fetchError} />}

      <h2 className="mt-5">Standings</h2>

      <p className="mt-4 mb-0"><strong>Season:</strong> {startYear}/{endYear}</p>

      <SearchInput search={search} onSearch={onSearch} placeholder={"Search team..."} />

      <section className="table-responsive mt-3">
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
            {filteredTeams.map(standing => <StandingItem data={standing} key={nanoid()} />)}
          </tbody>
        </table>
      </section>
      <p className="mt-3"><small>POS: Position — P: Points — W: Won matches — D: Drawn matches — L: Lost matches — GF: Goals for — GA: Goals against</small></p>

      <BackToTopBtn />
    </>
  )
};
