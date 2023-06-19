import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import competitionsService from "../../../services/competitions.service";

export default function CompetitionHeader() {

  const { code } = useParams();
  const [competition, setCompetition] = useState({});

  useEffect(() => {
    competitionsService.detail(code)
      .then(res => setCompetition(res))
      .catch(console.error)
  }, [code]);

  if (Object.keys(competition).length === 0) return (<p>Loading...</p>)

  return (
    <div>
      <h1>{competition.name}</h1>
    </div>
  )
}
