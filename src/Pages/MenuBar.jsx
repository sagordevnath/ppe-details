import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function MenuBar() {
  return (        
      <Navbar className='h-50' bg="light" data-bs-theme="light">
        <Container>
          {/* <Navbar.Brand href="/home">RS Communication Limited</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href='/introduction'>Introduction</Nav.Link>
            <Nav.Link href="/PPE">PPE</Nav.Link>
            <Nav.Link href="/PPE-Details">PPE Details</Nav.Link>
            <Nav.Link href="/land">Land</Nav.Link>
            <Nav.Link href="/buildings">Buildings</Nav.Link>
            <Nav.Link href="/property-machenary">Property n Machenary</Nav.Link>
            <Nav.Link href="/furniture">Furniture</Nav.Link>
            <Nav.Link href="/office-equipment">Office equipment</Nav.Link>
            <Nav.Link href="/electrical-equipment">Electrical Equipment</Nav.Link>
            <Nav.Link href="/automobiles ">Automobiles</Nav.Link>
            <Nav.Link href="/automobiles ">Assets under construction (AUC)</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}




export default MenuBar;
