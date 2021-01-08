import React from 'react';
import PropTypes from 'prop-types';
import { Image, Row, Col } from 'react-bootstrap';

function Project(props){
  const list = props.techList.map((tech, index) =>
    <li key={index}>{tech}</li>
  );
  
  return(
    <div className={props.className + ' project'}>
      <Row>
        <Col md>
          <h4>{props.title}</h4>
          <p>{props.summary}</p>
          <ul>{list}</ul>
        </Col>
        {props.imageSrc ? <Col md><Image src={props.imageSrc} alt={props.imageAlt} fluid/></Col> : null}
      </Row>
    </div>
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