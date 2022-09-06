import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import  {Main} from '../assets/css/Main.css'
import { createRegion } from '../services/Region.service';


function RegionCreate() {
    const [region, setRegion] = useState('');
    const [message, setMessage] = useState('');
    const store = async() => {
        const requestBody = {
            name: region
        }
        const response = await createRegion(requestBody);
        if(response && response.status === 201)
        
        {
            return setMessage('success');
        }
        return setMessage('erroree');
    }
  return (
        <Card>
            <Card.Header><h4>Region</h4></Card.Header>
            <Card.Body>
              <Card.Title>Enter a region name</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
              <Form.Control type="text" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="Enter Region" />
              
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={() => store()}>Add Region</Button>
            <span> {message != ''? message : ''} </span>
            </Card.Footer>
        </Card>

  )
}

export default RegionCreate