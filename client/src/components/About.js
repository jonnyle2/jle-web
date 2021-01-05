import './About.css';
import CouplePortrait from './resources/couple-portrait.jpg';
import { Image } from 'react-bootstrap';

function About(){
  return (
    <div className='About'>
      <h2>About Me</h2>
      <p>Hi, my name is Jonny Le. I graduated from the University of Texas at Dallas with a bachelors of science in computer science. Aside from </p>
      <Image src={CouplePortrait} alt='Image of Jonny and s.o.' fluid/>
    </div>
  );
}

export default About;