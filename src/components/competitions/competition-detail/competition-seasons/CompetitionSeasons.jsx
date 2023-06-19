import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import competitionsService from "../../../../services/competitions.service";
import SeasonItem from "./SeasonItem";

export default function CompetitionSeasons() {

  const { code } = useParams();
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    competitionsService.detail(code)
      .then(res => {
        const seasonsList = res.seasons;
        console.log(seasonsList);
        setSeasons(seasonsList);
      })
      .catch(console.error)
  }, [code]);

  if (seasons.length === 0) return (<p>Loading...</p>)

  return (
    <div>
      {seasons.map(season => <SeasonItem key={season.id} season={season} />)}
    </div>
  )
}