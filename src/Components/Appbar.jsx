import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='main-nav'>
        <h2 className='title'><span>The</span> Siren</h2>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <br/>
          <Nav className="me-auto">
            <NavLink to="/" className="home" id='home'>Home</NavLink>
            <NavLink to="/Bollywood" className="home" id='home'>Bollywood</NavLink>
            <NavLink to="/Technology" className="home" id='home'>Technology</NavLink>
            <NavLink to="/Hollywood" className="home" id='bar'>Hollywood</NavLink> 
            <NavLink to="/Fitness" className="home" id='bar'>Fitness</NavLink> 
            <NavLink to="/Food" className="home" id='bar'>Food</NavLink> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
