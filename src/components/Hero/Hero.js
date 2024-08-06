import './Hero.styles.css';
import restaurantDish from '../../assets/restaurantdish.jpg';
import { Link as LinkR } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='display-container'>
        <h1 className='display-title'>Little Lemon</h1>
        <h3 className='display-subtitle'>Italian Restaurant</h3>
        <h4 className='display-text'>
        Fresh flavors of Italy meet the warmth of home cooking, all in portions that will leave you wanting more.
        </h4>
        <LinkR to='/bookings' className='reserve-button'>
          Reserve a Table
        </LinkR>
      </div>
      <div className='image-container'>
        <img
          src={restaurantDish}
          alt='restaurant food'
          className='display-image'
        />
      </div>
    </section>
  );
};

export default Hero;
