import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { CreatePrice, getPirce } from '../../services/Price.service';
import { getStation } from '../../services/Station.service';


function PriceCreate1() {
  const [data,setData] = useState('');
  const [selvalue, setSelvalue] = useState(0);
  const [valuestagion, setvaluestagion] = useState(0);
  const [fuel , setFuel ] = useState([]);
   
const pp=[];

// console.log(pp)
    const stagion = async () => {
      const response = await getStation();
      setData(response.stations.data);
      console.log(data)

    return; 
  }

 

  useEffect (() =>{
    stagion();
  }, []);

  return (
    <div>
      
      <Card>
            <Card.Header><h4>Price</h4></Card.Header>
            <Card.Body>

            <Card.Title>Select Station</Card.Title>
            <Form.Select onChange={(e) => setvaluestagion(e.target.value)} aria-label="Default select example">
            <option value={0} >Open this select menu</option>
            {data.length > 0 && data.map((v,i)=>(
                    <option key={i} value={v.id}pp={v.name}>{v.name}</option>
            ))} 
            </Form.Select>

            <Card.Title>Select Station</Card.Title>
            <Form.Select onChange={(e) => setSelvalue(e.target.value)} aria-label="Default select example">
            <option value={0} >Open this select menu</option>
       
            {data.length > 0 && data.map((v,i)=>(
                    <option key={i} value={v.id}>{v.available_fuel}</option>
            ))}
            </Form.Select>

           
 
              <Card.Title>Enter Price</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
              <Form.Control type="text"  placeholder="Enter Price" />
            
     
            </Card.Body>
            <Card.Footer>
            <Button variant="primary">Add Price</Button>
            <span> </span>
            </Card.Footer>
        </Card>
        


    </div>
  )
}

export default PriceCreate1;