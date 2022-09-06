import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StationList from './StationList';
import StationCreat1 from './StationCreate';


function Station() {
  return (
    <div>
       <Container className='ttr'>
      <Row md={12}>
        <Col md={4}>
          <StationCreat1 />
        </Col>
        <Col md={8}>
            
            <StationList />
          
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Station