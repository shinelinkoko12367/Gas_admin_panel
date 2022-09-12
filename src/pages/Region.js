import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RegionCreate from './RegionCreate'
import RegionList from './RegionList';
import Table from './Table';
import Edit from './Edit';

function Region() {

  
  return (
    <Container className='ttr'>
      <Row md={12}>
        <Col md={4}>
            <RegionCreate />
        </Col>
        <Col md={8}>
            <RegionList />

        </Col>
        
      </Row>
    </Container>
  )
}

export default Region