import React, { useEffect, useState } from 'react'
import { Button, Card, Form, FormGroup } from 'react-bootstrap';
import { CreatePrice, getPirce } from '../../services/Price.service';
import { getStation } from '../../services/Station.service';
import DatePicker, { ReactDatePicker } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { DiscFull } from '@mui/icons-material';


function PriceCreate1() {
  const [data,setData] = useState([]);
  const [selvalue, setSelvalue] = useState(0);
  const [valuestagion, setvaluestagion] = useState(0);
  const [fuel , setFuel ] = useState([]);
  const [selectedFuel, setSelectedFuel] = useState('');
  const [startDate, setStartDate] = useState();
  const [message, setMessage] = useState('');
  const [price,setPrice] = useState('');


  
  console.log(startDate)

const stattionChangeHandler = (e) => {
 
  let chooseFuel = data.filter(value => value.id == e);

  setFuel(chooseFuel[0].available_fuel.map(value => value));
}

const store = async() => {
  const requestBody = {
    station_id : selvalue,
    fuel_type :  selectedFuel,
    date : startDate,
    price : price

   
  }
  const response = await CreatePrice(requestBody);
  if(response && response.status === 201)
  {
      return setMessage('success');
  }
  return setMessage('erroree');
}





    const stagion = async () => {
      const response = await getStation();
      setData(response.stations.data);
    
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
            <Form.Select value={selvalue} onChange={(e) => stattionChangeHandler(e.target.value)+setSelvalue (e.target.value)} aria-label="Default select example">
            <option value={0} >Open this select menu</option>
            {data.length > 0 && data.map((v,i)=>(
                    <option key={i} value={v.id} >{v.name}</option>
                    
            ))} 
            
            </Form.Select>
            <Card.Title>Select Fuel</Card.Title>
            <Form.Select value={selectedFuel} onChange={(e) => setSelectedFuel(e.target.value)} aria-label="Default select example">
            <option value={0} >Open this select menu</option>
       
            {fuel.length > 0 && fuel.map((v,i)=>(
                    <option key={i} value={v.id}>{v}</option>
            ))}
            </Form.Select>

            <Card.Title>Enter Pirce</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
              <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter  Price" />
              
              <Card.Title>Enter Date</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
              <Form.Control type="text" value={startDate} onChange={(e) =>setStartDate(e.target.value)} placeholder="2022 - 12 - 31" />
              
              
            {/* <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                onChange={(day) => setStartDate(day)}
              /> */}
  

              


            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={() => store()}>Save</Button>
            <span> {message != ''? message : ''} </span>
            </Card.Footer>
        </Card>
  
        


    </div>
  )
}

export default PriceCreate1;