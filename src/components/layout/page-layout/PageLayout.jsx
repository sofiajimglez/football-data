import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function PageLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container mt-5 flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
