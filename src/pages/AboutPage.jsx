import { Link } from "react-router-dom";
import PageLayout from "../components/layout/page-layout/PageLayout";
import BackToTopBtn from "../components/top-btn/BackToTopBtn";

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="row">
        <div className="col-12 pt-md-4">
          <h3>About the project</h3>
          <p>This web interface is developed with React technology on the front-end. To do so, it collects data from the free version of the <Link to="https://www.football-data.org./" target="_blank" rel="noreferrer" className="text-decoration-none text-muted fw-bolder">football-data API</Link>, showing leagues available, the ranking of each league and the results of a particular league.</p>
          <p>The website is fully responsive and aspects like design, usability and user experience have been taken into account at the time of implementation.</p>
        </div>
      </section>

      <section className="row align-items-center">
        <div className="col-sm-12 col-md-9 pt-md-4">
          <h3>About me</h3>
          <p>Hi! 😊 I'm a web developer with +5 years of experience in design and digital marketing.</p>
          <p>Recently, I decided to turn my career around and focus on development taking the Ironhack Full-Stack Development bootcamp where I have learned technologies such as Javascript, HTML, CSS, NodeJS, Express, MongoDB and React. </p>
          <p>I'd like to work in a company where I can learn and gradually assume new responsibilities as a web developer. I consider myself a committed, problem-solving and fast-learning professional. Let's talk and explore how I can bring value to your team!</p>
          <Link to="https://github.com/sofiajimglez" className="btn btn-main me-2" target="_blank"><i className="fa-brands fa-github pe-2"></i>GitHub</Link>
          <Link to="https://www.linkedin.com/in/sofiajimglez/" className="btn btn-main" target="_blank"><i className="fa-brands fa-linkedin-in pe-2"></i>LinkedIn</Link>
        </div>
        <div className="col-sm-12 col-md-3">
          <img className="rounded-circle mb-4 mt-sm-5" src="/profile-pic.png" alt="Sofía Jiménez González" width={200} />
        </div>
      </section>

      <section className="row pt-4 align-items-center text-end">
        <div className="col-12 pt-md-4">
          <h3>Other credits</h3>
          <p className="mb-0">Data from <Link to="https://www.football-data.org./" target="_blank" rel="noreferrer" className="text-decoration-none text-info">football-data.org API</Link></p>
          <p className="mb-0">Vector logo from <Link to="https://www.flaticon.es/" target="_blank" rel="noreferrer" className="text-decoration-none text-info">Flaticon</Link></p>
          <p className="mb-0">Loading animation from <Link to="https://loading.io/" target="_blank" rel="noreferrer" className="text-decoration-none text-info">Loading.io</Link></p>
          <p className="mb-0">Background vector from <Link to="https://www.freepik.es/" target="_blank" rel="noreferrer" className="text-decoration-none text-info">Freepick</Link></p>
        </div>
      </section>

      <BackToTopBtn />
    </PageLayout>
  )
}
