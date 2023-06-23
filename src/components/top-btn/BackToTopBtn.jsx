import { useState, useEffect } from 'react';
import './top-btn.css';

export default function BackToTopBtn() {
  const [btnVisibility, setBtnVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setBtnVisibility(true) // Show the back-to-top button if the scroll position is greater than 200
      } else {
        setBtnVisibility(false) // Hide the back-to-top button if the scroll position is less than or equal to 200
      };
    })
  }, []);

  // Scroll the window to the top position with smooth scrolling behavior
  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {btnVisibility &&
        <a className='back-to-top text-decoration-none d-none d-sm-inline'
          onClick={scrollUp} >
          <i className="fa-regular fa-futbol fa-2xl fa-bounce"></i>
        </a>
      }
    </>
  )
};
