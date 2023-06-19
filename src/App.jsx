import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/competitions/:code' element={<DetailPage />} />
      </Routes>
    </>
  )
}                                                                                                                                                         

export default App