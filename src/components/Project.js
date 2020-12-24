function Project(props){
  const techList = props.techList.map((tech) =>
    <li>{tech}</li>
  );
  
  return(
    <div className='Project'>
      <h3>{props.title}</h3>
      <ul>{techlist}</ul>
      <img src={props.imgSrc} alt={props.imgAlt}></img>
    </div>
    );
  }
  
export default Project;