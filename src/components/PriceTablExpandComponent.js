import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { updatePrice } from '../services/Price.service';

function PriceTablExpandComponent(data) {
    const[date,setDate] = useState('');
    const[fuels,setFuels]= useState('');
    const[price,setPrice]=useState('');
    const[message,setMessage] = useState('');
    console.log(data)
    
    const editPrice = async() => {
        const requestBody = {
           date : date,
           fuel_type : fuels,
           price : price

        };
        const response = await updatePrice(data.data.id, requestBody);
        if(response){
            setMessage('Update successful');
            data.refresh(true);
            return;
        }
    }
    useEffect(() => {
        setDate(data.data.date);
        setFuels(data.data.fuel_type)
        setPrice(data.data.price)
    },[])
  return (
    <div>
        <Row md={12}>
            <Col md={2}></Col>
            <Col md={2}>
            <Form.Label> Date</Form.Label>
                <Form.Control
                type='text'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
        
            </Col>
            <Col md={2}>
            <Form.Label> Fuels</Form.Label>
                <Form.Control disabled
                type='text'
                value={fuels}
                onChange={(e) => setFuels(e.target.value)}
                />
            </Col>
            <Col md={2}>
            <Form.Label>Price</Form.Label>
                <Form.Control
                type='text'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            </Col>
           
            

            <Col md={2}>
             
            <Form.Label> Action</Form.Label><br/>
            <Button onClick={() =>editPrice()}>
                Update
            </Button><br/>{message}
                
                
            </Col>
    
    
    </Row>
    </div>
  )
}

export default PriceTablExpandComponent