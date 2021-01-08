import React from 'react';
import './Home.css'
import Project from './Project';
import CheckInDemo from './resources/checklist-demo.gif';
import SelfPortrait from './resources/self-portrait.jpg';
import { Image } from 'react-bootstrap';
import Contact from './Contact';

function Home(){
  return (
    <div className='Home'>
      <header>
        <h1>Jonny M. Le</h1>
        <h4>Developer</h4>
        <Image src={SelfPortrait} alt='self-portrait of Jonny' roundedCircle />
        <p>
          <span className='about'>About</span>
          Recent graduate at the University of Texas at Dallas with a bachelors of science in computer science looking for a full-time role in development in the DFW and neighboring areas. 
          Here is his <a href='https://drive.google.com/file/d/1z9Ayd0OohkplAMJbNUaJHIMaWWW-20Tv/view?usp=sharing' target="_blank" rel="noreferrer">resume</a>! It's not much, but its a start. He would love to work with a company to help him build it.
        </p>
      </header>
      <div className='Home-body'>
        <h2>Project List</h2>
        {/* Project Website */}
        <Project className='project-odd'
                title='This Website'
                summary='It is a simple website to have more practice with react, build and test my chatbot, and showcase my projects.'
                techList={['React', 'Javascript', 'HTML', 'CSS']} />

        {/* Project Checklist */}
        <Project className='project-even'
                title='Check-In'
                summary='Intuitive check-in web application that solves issues of paper checklist. It features a dynamic list view and authority limited access through authentication.'
                techList={['SpringBoot', 'Java', 'MySQL', 'HTML', 'CSS']}
                imageSrc={CheckInDemo} imageAlt='GIF of check-in demo'/>
                
        <Contact email='jonnyle2@gmail.com'
                phone='214-516-1705'
                link='https://www.linkedin.com/in/jonnymle'
                github='https://github.com/jonnyle2' />
      </div>
    </div>
  );
}

export default Home;