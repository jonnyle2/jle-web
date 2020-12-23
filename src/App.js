import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar expand='sm' fixed='top'>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse>
          <Nav className='m-auto'>
            <Nav.Item><NavLink exact to='/'>Home</NavLink></Nav.Item>
            <Nav.Item><NavLink to='/about'>About</NavLink></Nav.Item>
            <Nav.Item><NavLink to='/contact'>Contact</NavLink></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/contact'><Contact /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
