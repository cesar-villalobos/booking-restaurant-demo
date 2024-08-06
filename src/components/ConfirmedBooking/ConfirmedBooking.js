import { useEffect, useState } from 'react';
import './ConfirmedBooking.styles.css';
import restaurant from '../../assets/restaurant.jpg';
import location from '../../assets/booking/location.svg';
import { Link as LinkR } from 'react-router-dom';

const ConfirmedBooking = () => {
  const [reservedDetails, setReserveDetails] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('Bookings');
    if (data !== null) setReserveDetails(JSON.parse(data));
  }, []);

  return (
    <section name='booking-confirmation' className='booking-confirmation'>
      <img src='./Logo.svg' alt='logo' className='confirmation-logo' />
      <div className='confirmation-image-container'>
        <img
          src={restaurant}
          alt='Little Lemon Restaurant'
          className='confirmation-image'
        />
      </div>

      <h1 className='confirmation-confirmed'>Your reservation is confirmed!</h1>
      <h2 className='confirmation-reserved'>Little Lemon</h2>
      <div className='confirmation-details-container'>
        <h2>
          DATE:{' '}
          <span className='confirmation-details'>{reservedDetails.date}</span>
        </h2>
        <h3>
          TIME:{' '}
          <span className='confirmation-details'>{reservedDetails.time}</span>
        </h3>
        <h3>
          GUESTS:{' '}
          <span className='confirmation-details'>{reservedDetails.guests}</span>
        </h3>
      </div>

      <div className='confirmation-location'>
        <img src={location} alt='location' className='location-logo' />
        Little Lemon, 123 Sunnyside Avenue
        <br />
        Chicago, IL 60607
        <a
          href='https://www.google.com/search?q=123+Sunnyside+Avenue+Chicago%2C+Illinois+60602&sca_esv=48b803f900d1ec24&rlz=1C1CHBF_enPH1002PH1002&tbm=lcl&sxsrf=ADLYWIJRb1xNBYTAD9fPwrD3m7tKOELUsw%3A1722916839332&ei=55-xZoP_E9_X1sQP1v3s0QI&ved=0ahUKEwjDjr6xvd-HAxXfq5UCHdY-OyoQ4dUDCAk&uact=5&oq=123+Sunnyside+Avenue+Chicago%2C+Illinois+60602&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIiwxMjMgU3VubnlzaWRlIEF2ZW51ZSBDaGljYWdvLCBJbGxpbm9pcyA2MDYwMjIIEAAYgAQYogRI4A5QAFgAcAB4AJABAJgBUKABUKoBATG4AQPIAQD4AQL4AQGYAgGgAlOYAwCSBwExoAefAQ&sclient=gws-wiz-local'
          target={'_blank'}
          rel='noreferrer'
        >
          <p>Get Directions</p>
        </a>
      </div>

      <LinkR to='/' className='confirmation-home'>
        Go Home
      </LinkR>
    </section>
  );
};

export default ConfirmedBooking;
