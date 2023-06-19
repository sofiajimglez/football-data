import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SeasonsPage from './pages/SeasonsPage';
import StandingsPage from './pages/StandingsPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/competitions/:code' element={<SeasonsPage />} />
        <Route path='/competitions/:id/standings' element={<StandingsPage />} />
      </Routes>
    </>
  )
}                                                                                                                                                         

export default App