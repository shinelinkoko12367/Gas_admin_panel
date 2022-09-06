import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceList from './PriceList';
import PriceCreate from './PriceCreate';

function Price() {
  return (
    <div>
       <Container className='ttr'>
      <Row md={12}>
        <Col md={3}>
          <PriceCreate />
        </Col>
        <Col md={9}>
            
            <PriceList />
          
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Price