import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TwonshipCreate } from '../../services/Township.service';
import TownCreate from './TownshipCreate';
import TownshipList from './TownshipList';
import TownshipSelect from './TownshipSelect';

function Township() {
  return (
    <div>
       <Container className='ttr'>
      <Row md={12}>
        <Col md={3}>
           <TownCreate />
        </Col>
        <Col md={9}>
            <TownshipList />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Township