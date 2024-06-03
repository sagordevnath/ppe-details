import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
  return (        
      <Navbar className='h-50' bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/home">RS Communication Limited</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/PPE">PPE</Nav.Link>
            <Nav.Link href="/PPE-Details">PPE Details</Nav.Link>
            <Nav.Link href="/PPE-Summary">PPE Summary</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}


export default ColorSchemesExample;