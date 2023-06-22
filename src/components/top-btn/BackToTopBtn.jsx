import { useState, useEffect } from 'react';
import './top-btn.css';

export default function BackToTopBtn() {
  const [btnVisibility, setBtnVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setBtnVisibility(true)
      } else {
        setBtnVisibility(false)
      };
    })
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {btnVisibility && <a className='back-to-top text-decoration-none d-none d-sm-inline' onClick={scrollUp} ><i class="fa-regular fa-futbol fa-2xl fa-bounce"></i></a>}
    </>
  )
}
