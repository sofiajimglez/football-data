import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import competitionsService from "../../../services/competitions.service";
import SeasonItem from "./SeasonItem";
import CompetitionHeader from "../competition-header/CompetitionHeader";

export default function CompetitionSeasons() {

  const { code } = useParams();
  const [competition, setCompetition] = useState({});

  useEffect(() => {
    competitionsService.detail(code)
      .then(res => setCompetition(res))
      .catch(console.error)
  }, [code]);

  const seasons = competition.seasons;

  if (Object.keys(competition).length === 0) return (<p>Loading...</p>);

  return (
    <div>
      <CompetitionHeader competition={competition} />
      {seasons.map(season => <SeasonItem key={season.id} season={season} />)}
    </div>
  )
}