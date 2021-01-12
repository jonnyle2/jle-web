import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
import { Widget } from 'rasa-webchat';
import './App.css';

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar expand='sm' fixed='top'>
    //     <Navbar.Toggle aria-controls='basic-navbar-nav'/>
    //     <Navbar.Collapse>
    //       <Nav className='m-auto'>
    //         <Nav.Item><NavLink exact to='/'>Home</NavLink></Nav.Item>
    //         <Nav.Item><NavLink to='/about'>About</NavLink></Nav.Item>
    //         <Nav.Item><NavLink to='/contact'>Contact</NavLink></Nav.Item>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>

    //   <Switch>
    //       <Route exact path='/'><Home /></Route>
    //       <Route path='/about'><About /></Route>
    //       <Route path='/contact'><Contact /></Route>
    //   </Switch>
    // </BrowserRouter>
    <div className='App'>
      <Widget
        initPayload={"/welcome"}
        socketUrl={'http://localhost:5005'}
        socketPath={'/socket.io/'}
        customData={{"language": "en"}}
        title={"Jonny's chatbot 🤖"}
        displayUnreadCount={true}
        showFullScreenButton={true}
        params={{storage: "session"}}
      />
      <Home />
    </div>
  );
}

export default App;
