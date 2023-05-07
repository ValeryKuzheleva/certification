import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>PoraTrip</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link> 
              <Link to={'/'}>
                Наши туры
              </Link> 
            </Nav.Link>
            <Nav.Link> 
              <Link to={'/reviews'}>
                Отзывы
              </Link> 
            </Nav.Link>
            <Nav.Link> 
              <Link to={'/contacts'}>
                Контакты
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-primary">
              <Link to={'/cart'}>
              Корзина
              </Link>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header