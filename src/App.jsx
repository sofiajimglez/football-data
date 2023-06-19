import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SeasonsPage from './pages/SeasonsPage';
import StandingsPage from './pages/StandingsPage';
import MatchesPage from './pages/MatchesPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/competitions/:code' element={<SeasonsPage />} />
        <Route path='/competitions/:code/standings' element={<StandingsPage />} />
        <Route path='/competitions/:code/matches' element={<MatchesPage />} />
      </Routes>
    </>
  )
}                                                                                                                                                         

export default App