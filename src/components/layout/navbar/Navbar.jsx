import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <h1 className="fs-2 mb-0 text-white">
            <i className="fa-solid fa-person-walking me-2"></i>
            <i className="fa-solid fa-circle fa-2xs me-3"></i>
            Football Data
          </h1>
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
          </ul>
        </div>
      </div>
    </nav>
  )
}
