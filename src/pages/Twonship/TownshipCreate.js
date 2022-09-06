import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import  {Main} from '../../assets/css/Main.css'
import { TownshipCreate } from '../../services/Township.service';
import TownshipSelect from './TownshipSelect';
import { getRegion } from "../../services/Region.service";

function TownCreate() {
    const [town,setTown] =useState('');
    const [message, setMessage] = useState('');
    const [data,setData] = useState([]);
    const [selvalue, setSelvalue] = useState(0);
    const posts = async () =>{
        const response = await getRegion();
        setData(response.regions.data);
        return; 
    }
    
    console.log(selvalue)
    useEffect (() =>{
        posts();
    }, []);

    const store = async() => {
        const requestBody = {
            
            region_id  :selvalue,
            name: town
            
        }
        

        const response = await TownshipCreate(requestBody);
        if(response && response.status === 201)
        {
            return setMessage('success');
        }
        return setMessage('error');
    }
  return (
        <Card>
            <Card.Header><h4>Townshp</h4></Card.Header>
            <Card.Body>
            <Card.Title>Select Region</Card.Title>
            <Form.Select onChange={(e) => setSelvalue(e.target.value)} aria-label="Default select example">
            <option value={0} >Open this select menu</option>
            {data.length > 0 && data.map((v,i)=>(
                    <option key={i} value={v.id}>{v.name}</option>
            ))}
        
      </Form.Select>
 
              <Card.Title>Enter Township name</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
              <Form.Control type="text" value={town} onChange={(e) => setTown(e.target.value)} placeholder="Enter Township" />
              
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={() => store()}>Add Twonship</Button>
            <span> {message != ''? message : ''} </span>
            </Card.Footer>
        </Card>

  )
}

export default TownCreate