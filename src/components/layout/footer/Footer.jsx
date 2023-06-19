import './footer.css';

export default function Footer() {
  return (
    <footer className="mt-5">
      <div className="footer-main d-flex justify-content-center gap-2 pt-3">
        <p className="mb-0">2023 ⚽ Sofía Jiménez</p>
        <a href='https://github.com/sofiajimglez' target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
        <a href='https://www.linkedin.com/in/sofiajimglez/' target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
      </div>
      <div className="footer-info d-flex justify-content-center gap-2 pt-2 pb-3">
        <p className="mb-0">Data from <a href="https://www.football-data.org./" target="_blank" rel="noreferrer">football-data.org API</a> —</p>
        <p className="mb-0">Logo vector from <a href="#" target="_blank" rel="noreferrer">Flaticon</a></p>
      </div>
    </footer>
  )
}
