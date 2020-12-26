import PropTypes from 'prop-types';

function Project(props){
  const list = props.techList.map((tech, index) =>
    <li key={index}>{tech}</li>
  );
  
  return(
    <>
      <h3>{props.title}</h3>
      <p>{props.summary}</p>
      <ul>{list}</ul>
      <img src={props.imageSrc} alt={props.imageAlt}/>
    </>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  techList: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string
};
  
export default Project;