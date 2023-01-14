import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbartitle() {
  return (
    
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className='main-nav'>
        <h2 className='title'><span>The</span> Siren</h2>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <br/> 
        </Navbar.Collapse>
      
      </Container>
      </Navbar>
  );
}

export default Navbartitle;