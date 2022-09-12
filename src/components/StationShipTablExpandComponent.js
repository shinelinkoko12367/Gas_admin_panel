import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { updateStation } from '../services/Station.service';

function StationShipTablExpandComponent(data) {
    const [StationName,setStationName]=useState('');
    const [AddressnName,setAddressName]=useState('');
    const [LongitudeName,setLongitudeName]=useState('');
    const [latitudeName,setlatitudeName]=useState('');
    const [available_fuelName,setavailable_fuelName]=useState('');
    const [message,setMessage] =useState('');
    console.log(data)
    const editSatation = async() =>{
        const requestBody = {
            name : StationName,
            address : AddressnName,
            latitude : latitudeName,
            longitude : LongitudeName,
            available_fuel: available_fuelName,
           
     
        };
        const response = await updateStation(data.data.id, requestBody);
        if(response){
            setMessage('Update successful');
            data.refresh(true);
            return;
        }

    }
    useEffect(() => {
        setStationName(data.data.name);
        setAddressName(data.data.address)
        setLongitudeName(data.data.longitude)
        setlatitudeName(data.data.latitude)
        setavailable_fuelName(data.data.available_fuel)
    },[])
  return (
    <div>
        <Row md={12}>
            <Col md={2}>
            <Form.Label> Station Name</Form.Label>
                <Form.Control
                type='text'
                value={StationName}
                onChange={(e) => setStationName(e.target.value)}
                />
        
            </Col>
            <Col md={2}>
            <Form.Label> Address</Form.Label>
                <Form.Control
                type='text'
                value={AddressnName}
                onChange={(e) => setAddressName(e.target.value)}
                />
            </Col>
            <Col md={2}>
            <Form.Label>latitude</Form.Label>
                <Form.Control
                type='text'
                value={latitudeName}
                onChange={(e) => setlatitudeName(e.target.value)}
                />
            </Col>
            <Col md={2}>
            <Form.Label> Longitude</Form.Label>
                <Form.Control
                type='text'
                value={LongitudeName}
                onChange={(e) => setLongitudeName(e.target.value)}
                />
            </Col>
            
            
            <Col md={2}>
            <Form.Label>available_fuel</Form.Label>
                <Form.Control
                type='text'
                value={available_fuelName}
                onChange={(e) => setavailable_fuelName(e.target.value)}
                />
            </Col>
            

            <Col md={2}>
             
            <Form.Label> Action</Form.Label><br/>
            <Button onClick={() =>editSatation()}>
                Update
            </Button><br/>{message}
                
                
            </Col>
    
    
    </Row>
    </div>
  )
}

export default StationShipTablExpandComponent