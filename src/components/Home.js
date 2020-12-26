import './Home.css'
import Project from './Project.js';
import CheckInDemo from './resources/checklist-demo.gif';

function Home(){
  return (
    <div className='Home'>
      <header>
        <h1>Jonny M. Le</h1>
        <p>
          Recent graduate looking for a full-time position in development in the DFW and neighboring areas. 
          Here is his <a href='https://drive.google.com/file/d/1z9Ayd0OohkplAMJbNUaJHIMaWWW-20Tv/view?usp=sharing'>resume</a>! It's not much, but its a start. He would love to work with a company to help him build it.
        </p>
      </header>

      {/* Project Website */}
      <Project className='project-odd'
               title='This Website'
               summary='It is a simple website to have more practice with react, build and test my chatbot, and showcase my projects.'
               techList={['React', 'Javascript', 'HTML', 'CSS']}
               imageSrc='' imageAlt='GIF of website'/>

      {/* Project Checklist */}
      <Project className='project-even'
               title='Check-In'
               summary='Intuitive check-in web application that solves issues of paper checklist. It features a dynamic list view and authority limited access through authentication.'
               techList={['SpringBoot', 'Java', 'MySQL', 'HTML', 'CSS']}
               imageSrc={CheckInDemo} imageAlt='GIF of check-in demo'/>
    </div>
  );
}

export default Home;