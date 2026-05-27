import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">

      <Container>

        
        <Navbar.Brand as={Link} to="/">
          Recipe Book
        </Navbar.Brand>

        
        <Navbar.Toggle />

        <Navbar.Collapse>

        
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/add-recipe">
              Add Recipe
            </Nav.Link>
          </Nav>

    
          <Button variant="warning" as={Link} to="/login">
            Login
          </Button>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default NavigationBar;