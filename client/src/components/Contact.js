import './Contact.css';
import PropTypes from 'prop-types';
import { Alert, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import postContact from '../api/ContactApi';

function Contact(props){
  // state holds form input
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // state holds isValid state
  const [validated, setValidated] = useState(false);

  // state holds alert visibility
  const [show, setShow] = useState(false);

  const handleContactOnChange = (event) => {
    const {name, value} = event.target;
    setContact(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if(form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      postContact(contact);
      setShow(true);
      setValidated(false);
      setContact({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  return (
    <div className='Contact'>
      <h2>Contacts</h2>
      <Row>
        <Col className='contact-list' md>
          <Row>
            <Col>
              <ul>
                {props.phone ? <li>Phone: </li> : null}
                {props.email ? <li>Email: </li> : null}
                {props.link ? <li>LinkedIn: </li> : null}
                {props.github ? <li>GitHub: </li> : null}
              </ul>
            </Col>
            <Col>
              <ul>
                {props.phone ? <li>{props.phone}</li> : null}
                {props.email ? <li><a href={'mailto:' + props.email}>{props.email}</a></li> : null}
                {props.link ? <li><a href={props.link} target='_blank' rel='noreferrer'>{props.link.replace('https://www.linkedin.com/in','')}</a></li> : null}
                {props.github ? <li><a href={props.github} target='_blank'rel='noreferrer'>{props.github.replace('https://github.com','')}</a></li> : null} 
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className='form-contacts' md>
          <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Control required placeholder='Name' name='name' value={contact.name} onChange={handleContactOnChange} />
                  <Form.Control.Feedback type='invalid'>Name is required</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control required type='email' name='email' placeholder='Email' value={contact.email} onChange={handleContactOnChange} />
                  <Form.Control.Feedback type='invalid'>Email is required</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Control required placeholder='Subject' name='subject' value={contact.subject} onChange={handleContactOnChange} />
              <Form.Control.Feedback type='invalid'>Subject is required</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control required as='textarea' placeholder='Message' rows={5} name='message' value={contact.message} onChange={handleContactOnChange}/>
              <Form.Control.Feedback type='invalid'>Message is required</Form.Control.Feedback>
            </Form.Group>
            <Button type='submit'>
              Submit
            </Button>
          </Form>
          {show ? <Alert variant='success' onClose={_ => setShow(false)} dismissible>
            <Alert.Heading>Message Sent!</Alert.Heading>
            <p>
              Thank you for sending a message. I will get back to you as soon as possible. <br/>
              - Jonny
            </p>
          </Alert> : null }
        </Col>
      </Row>
    </div>
  );
}

Contact.propTypes = {
  email: PropTypes.string,
  cell: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string
};

export default Contact;