import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Oppo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.oppo.com/in/?gclid=CjwKCAjw5pShBhB_EiwAvmnNV-ac4Qaq9h8NUKeb7IrQfEV_w5j8oXHGtx4Afm0BogQ31I9nJ0RC0hoCzMAQAvD_BwE">Home</Nav.Link>
            <Nav.Link href="https://www.amazon.in/oppo-charger-original/s?k=oppo+charger+original">Charger</Nav.Link>
            <Nav.Link href="https://www.snapdeal.com/products/mobiles-cases-covers/filters/CompatibleBrand_s~Oppo">Case Cover</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header