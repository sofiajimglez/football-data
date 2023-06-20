import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import competitionsService from "../../../services/competitions.service";
import CompetitionHeader from "../header/CompetitionHeader";
import MatchdayGroup from "./MatchdayGroup";
import ErrorAlert from "../../errors/error-alert/ErrorAlert";

export default function CompetitionMatches() {
  const { code } = useParams();
  const [competition, setCompetition] = useState({});
  const [matches, setMatches] = useState([]);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const competitionData = await competitionsService.detail(code);
        setCompetition(competitionData);

        const matchesData = await competitionsService.matches(competitionData.id);

        // Groups the array of total matches by matchday
        const matchesByMatchday = matchesData.matches.reduce((result, match) => {
          const { matchday } = match;
          if (!result[matchday]) {
            result[matchday] = [];
          }
          result[matchday].push(match);
          return result;
        }, {});

        // Extracts result in one array of arrays. Each one is a matchday with the corresponding matches
        const matchesByMatchdayArr = Object.values(matchesByMatchday);
        setMatches(matchesByMatchdayArr);

        setFetchError('');
        
      } catch (error) {
        console.error(error);
        setFetchError(error.response?.data?.message);
      }
    }
    
    fetchData();

  }, [code]);

  if (matches.length === 0) return (<p>Loading...</p>);

  return (
    <div>
      <CompetitionHeader competition={competition} />

      {fetchError && <ErrorAlert message={fetchError} />}

      {matches.map((matchday, i) => <MatchdayGroup day={i + 1} matches={matchday} key={i} />)}
    </div>
  )
}
