// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation() {
  return (
    <Navbar bg="light" sticky="top" className="Header">
      <Container>
        <Navbar.Brand>ShredShare</Navbar.Brand>
      </Container>
    </Navbar>
  );
}



{/* <Navbar expand="lg" className="bg-body-tertiary">
<Container fluid>
  <Navbar.Brand href="#">ShredShare</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <NavDropdown title="Skis" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">View Skis</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Edit Your Skis</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Surfboards" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">View Surfboards</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Edit Surfboards</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Logout
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Container>
</Navbar> */}