import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import competitionsService from "../../../services/competitions.service";
import CompetitionHeader from "../header/CompetitionHeader";
import MatchdayGroup from "./MatchdayGroup";

export default function CompetitionMatches() {
  const { code } = useParams();
  const [competition, setCompetition] = useState({});
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    competitionsService.detail(code)
      .then(res => setCompetition(res))
      .catch(console.error)
  }, [code]);

  useEffect(() => {
    if (competition.id) {
      competitionsService.matches(competition.id)
        .then(res => setMatches(res.matches))
        .catch(console.error)
    }
  }, [competition.id]);

  // Groups the array of total matches by matchday
  const groupedMatches = matches.reduce((result, match) => {
    const { matchday } = match;
    if (!result[matchday]) {
      result[matchday] = [];
    }
    result[matchday].push(match);
    return result;
  }, {});

  // Extracts result in one array of arrays. Each one is a matchday with the corresponding matches
  const arrsByMatchday = Object.values(groupedMatches);

  if (matches.length === 0) return (<p>Loading...</p>);

  return (
    <div>
      <CompetitionHeader competition={competition} />
      {arrsByMatchday.map((matchday, i) => <MatchdayGroup day={i + 1} matches={matchday} key={i} />)}
    </div>
  )
}
