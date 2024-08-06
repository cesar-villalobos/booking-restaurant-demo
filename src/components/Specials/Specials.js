import './Specials.styles.css';
import Card from '../Card/Card';

const Specials = () => {
  return (
    <section name='menu' className='specials'>
      <div className='specials-header'>
        <h1 className='specials-title'>Chef's Suggestions</h1>
        <button className='menu-button'>Online Menu</button>
      </div>
      <Card />
    </section>
  );
};

export default Specials;
