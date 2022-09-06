import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Region from '../pages/Region';


function Home() {
  return (
    <Container>
    <Row>
      <Col>
          <Region />
      </Col>
      <Col>
      </Col>
    </Row>


  </Container>
  )
}

export default Home