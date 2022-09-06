import React from 'react'
import { ButtonGroup, Card } from 'react-bootstrap';
import PriceTable from './PriceTable';


function PriceList() {
  return (
    <div>
          <>
       <Card>
       <Card.Header><h4>Price List</h4></Card.Header>
        <Card.Body>
            <PriceTable />

        </Card.Body>
       </Card>
    </>

    </div>
  )
}

export default PriceList