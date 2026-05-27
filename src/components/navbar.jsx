import {navbar, nav, container, button} from 'react-bootstrap';
import {link, usenavigate }from 'react-routes-dom';
import { useAuth }from '../context/AuthContext.js';

const NavigationBar = () => {

  return (
    <Navbar bg="dark" variant="dark">

      <Container>

        <Navbar.Brand>
          RECIPE BOOK
        </Navbar.Brand>

        <Nav className="me-auto">

          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/add-recipe">
            Add Recipe
          </Nav.Link>

          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>

        </Nav>

      </Container>

    </Navbar>
  );
};

export default NavigationBar;



























