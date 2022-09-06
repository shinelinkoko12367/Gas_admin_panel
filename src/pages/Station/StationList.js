import React from 'react'
import { ButtonGroup, Card } from 'react-bootstrap';
import SattionTable from './StationTable';

function StationList() {
  return (
    <div>
          <>
       <Card>
       <Card.Header><h4>Station List</h4></Card.Header>
        <Card.Body>
            <SattionTable />
        </Card.Body>
       </Card>
    </>

    </div>
  )
}

export default StationList