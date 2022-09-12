
import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { updateRegion } from '../services/Region.service';
import Col from 'react-bootstrap/Col';

const TablExpandComponent = (data) => {
    const [regionName, setRegionName] = useState('');
    const [message, setMessage] = useState('');

    const editRegion = async() => {
        const requestBody = {
            name: regionName
        };
        const response = await updateRegion(data.data.id, requestBody);
        if(response){
            setMessage('Update successful');
            data.refresh(true);
            return;
        }
    }

    useEffect(() => {
        setRegionName(data.data.name);
    },[])

  return (
        <Row md={12}>
            <Col md={4}>
        
            </Col>
            <Col md={4}>
            <Form.Label> Region Name</Form.Label>
                <Form.Control
                type='text'
                value={regionName}
                onChange={(e) => setRegionName(e.target.value)}
                />
            </Col>

            <Col md={3}>
            <Form.Label> Action</Form.Label><br/>
            <Button onClick={() => editRegion()}>
                Update
            </Button>                
            </Col>
    
    
    </Row>
  )
}

export default TablExpandComponent