import { useEffect, useState } from "react";
import competitionsService from "../../../services/competitions.service";
import CompetitionItem from "./CompetitionItem";
import ErrorAlert from "../../errors/error-alert/ErrorAlert";
import SearchInput from "../../forms/search-input/SearchInput";
import Loading from "../../loading/Loading";
import './competitions.css';

export default function CompetitionsList() {

  const [competitions, setCompetitions] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [search, setSearch] = useState('');

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

  const onSearch = (value) => setSearch(value);

  const filteredCompetitions = competitions.filter(elem => elem.name.toLowerCase().includes(search.toLowerCase()));

  if (competitions.length === 0) return (<Loading />);

  return (
    <>
      <h2>Competitions List</h2>

      <SearchInput search={search} onSearch={onSearch} placeholder={"Search competition..."} />

      {fetchError && <ErrorAlert message={fetchError} />}

      <section className="row gap-4 my-4 mx-2">
        {filteredCompetitions.map(elem => <CompetitionItem key={elem.id} competition={elem} />)}
      </section>

    </>
  )
}
