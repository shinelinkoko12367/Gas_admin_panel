import React from 'react'
import { ButtonGroup, Card } from 'react-bootstrap';
import TwonTable from './TownTable';
function TownshipList() {
  return (
    <div>
          <>
       <Card>
       <Card.Header><h4>Township List</h4></Card.Header>
        <Card.Body>
        <TwonTable />
        </Card.Body>
       </Card>
    </>

    </div>
  )
}

export default TownshipList