import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { updateTownship } from '../services/Township.service'

function TownShipTablExpandComponent(data) {
    console.log(data.data.name)
    const [TownshipName,SetTownshipName] = useState('')
    const [message, setMessage] = useState('');
    
    const editTownship = async() =>{
        const requestBody = {
            name: TownshipName,
            
            
        };
        const response = await updateTownship(data.data.id, requestBody);
        if(response){
            setMessage('Update successful');
            data.refresh(true);
            return;
        }

    }

    useEffect(() => {
        SetTownshipName(data.data.name);
    },[])
  return (
    <div>
        <Row md={12}>
            <Col md={4}>
        
            </Col>
            <Col md={4}>
            <Form.Label> TownShip Name</Form.Label>
                <Form.Control
                type='text'
                value={TownshipName}
                onChange={(e) => SetTownshipName(e.target.value)}
                />
            </Col>

            <Col md={3}>
            <Form.Label> Action</Form.Label><br/>
            <Button onClick={() =>editTownship()}>
                Update
            </Button><br/>{message}
                
                
            </Col>
    
    
    </Row>
    </div>
  )
}

export default TownShipTablExpandComponent