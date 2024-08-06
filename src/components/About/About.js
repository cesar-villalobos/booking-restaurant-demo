import './About.styles.css';
import Chef1 from '../../assets/about/chefs1.jpeg';
import Chef2 from '../../assets/about/chefs2.jpeg';

const About = () => {
  return (
    <section name='about' className='about'>
      <div className='about-container'>
        <h1 className='about-title'>Little Lemon</h1>
        <h2 className='about-subtitle'>Chicago</h2>
        <p className='about-text'>
          Born from the shared passion of two chefs, Maria Esposito and David Chen, Little Lemon is a culinary journey where the vibrant flavors of Italy meet the subtle nuances of Chinese cuisine. Our menu celebrates the rich heritage of both cultures, offering classic dishes alongside innovative fusion creations. 
          <br />We invite you to experience the warmth of home cooking and the joy of discovering new flavors at Little Lemon.
        </p>
      </div>
      <div className='about-image-container'>
        <div className='about-container-one'>
          <img
            src={Chef1}
            alt='Mario and Adrian 1'
            className='about-image-one'
          />
        </div>
        <div className='about-container-two'>
          <img
            src={Chef2}
            alt='Mario and Adrian 2'
            className='about-image-two'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
