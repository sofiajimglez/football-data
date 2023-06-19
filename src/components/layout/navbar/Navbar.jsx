import './navbar.css';
import logo from '../../../assets/flag-football.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex gap-2 align-items-center" href="/">
          <img src={logo} height="40" alt="football data logo" />
          <h1 className="fs-2 mb-0 text-white">Football Data</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-grip-lines text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="https://github.com/sofiajimglez/football-data" target="_blank" rel="noreferrer">GitHub Repo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
