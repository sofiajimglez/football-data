import loadingAnimation from '../../assets/loading-animation.svg';

export default function Loading() {
  return (
    <section className='d-flex flex-column justify-content-center align-items-center'>
      <img src={loadingAnimation} alt="Animated SVG" />
      <p>Loading...</p>
    </section>
  )
};
