import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormattedYear } from "../../../utils/getFormattedYear";
import competitionsService from "../../../services/competitions.service";
import CompetitionHeader from "../header/CompetitionHeader";
import MatchdayGroup from "./MatchdayGroup";
import ErrorAlert from "../../errors/error-alert/ErrorAlert";
import BackToTopBtn from "../../top-btn/BackToTopBtn";
import SelectMatchday from "../../forms/select-matchday/SelectMatchday";
import Loading from "../../loading/Loading";

export default function CompetitionMatches() {

  // Retrieve the "code" parameter from the URL to make the call to the api
  const { code } = useParams();

  // State variables for competition, matches list and fetch error message
  const [competition, setCompetition] = useState({});
  const [matches, setMatches] = useState([]);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {

        // Fetch competition data based on the provided code by useParams hook
        const competitionData = await competitionsService.detail(code);
        setCompetition(competitionData);

        // Fetch matches data for the competition based on the competition id
        const matchesData = await competitionsService.matches(competitionData.id);

        // Group the array of total matches by matchday
        const matchesByMatchday = matchesData.matches.reduce((result, match) => {
          const { matchday } = match;
          if (!result[matchday]) {
            result[matchday] = [];
          }
          result[matchday].push(match);
          return result;
        }, {});

        // Extract the matches grouped by matchday into an array of arrays & update the matches state
        const matchesByMatchdayArr = Object.values(matchesByMatchday);
        setMatches(matchesByMatchdayArr);

        // Reset fetch error to empty string in case it was visible
        setFetchError(''); 
        
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

  // Find the element with the selected matchday & scroll down the page if it exists
  const handleSelect = (selectedMatchday) => {
    const element = document.getElementById(selectedMatchday);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render the loading component while data is being fetched from the api
  if (matches.length === 0) return (<Loading />);

  return (
    <>
      <CompetitionHeader competition={competition} />

      {fetchError && <ErrorAlert message={fetchError} />}

      <h2 className="mt-5">Season: {startYear}/{endYear}</h2>

      <SelectMatchday matches={matches} onSelect={handleSelect} />

      {matches.map((matchday, i) => <MatchdayGroup day={i + 1} matches={matchday} key={i} />)}

      <BackToTopBtn />
    </>
  )
}
