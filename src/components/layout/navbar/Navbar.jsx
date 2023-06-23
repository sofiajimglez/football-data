import './navbar.css';
import logo from '../../../assets/flag-football.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">

      <div className="container">
        <Link className="navbar-brand d-flex gap-2 align-items-center" to="/">
          <img src={logo} height="40" alt="football data logo" />
          <h1 className="fs-2 mb-0 text-white">Football Data</h1>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-grip-lines text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="https://github.com/sofiajimglez/football-data" target="_blank" rel="noreferrer">GitHub Repo</Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
};
