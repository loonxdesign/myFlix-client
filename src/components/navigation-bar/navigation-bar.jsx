import { Navbar, Container, Nav, Form, Row, Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavigationBar = ({
  user,
  onLoggedOut,
  searchQuery,
  setSearchQuery,
}) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Ghib-lix App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Form inline>
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className="ms-md-3 me-3 w-75"
                        value={searchQuery}
                        onChange={handleSearch}
                      />
                    </Col>
                  </Row>
                </Form>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  My Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
