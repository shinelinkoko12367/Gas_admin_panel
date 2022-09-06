import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  {Main} from '../assets/css/Main.css'
import React from 'react'
import { navData } from '../routes/RouteData';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo512.png'

const Navigation = () => {
    return (
        <Navbar  bg="dark" variant="dark">
          <img src={Logo} width="50" />
            <Container>
                <Navbar.Brand href="/home">Petrol Station</Navbar.Brand>
                
            </Container>
            <Nav className="me-auto ">
            {
              navData.length > 0 && navData.map((value, index) => (
                  <Nav.Link className='nav1' key={`navDAta${index}`} as={Link} to={value.link}> {value.navigation} </Nav.Link>
              ))
            }
            </Nav>
        </Navbar>
    )
}



export default Navigation