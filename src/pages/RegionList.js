import React from 'react'
import { ButtonGroup, Card } from 'react-bootstrap';
import Table1 from './Table';

function RegionList() {
  return (
    <>
       <Card>
       <Card.Header><h4>Region List</h4></Card.Header>
        <Card.Body>
        <Table1 />
        </Card.Body>
       </Card>
    </>

  )
}

export default RegionList