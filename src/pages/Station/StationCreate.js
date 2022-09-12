import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import  {Main} from '../../assets/css/Main.css'
import { StationCreate } from '../../services/Station.service';
import { getTownship } from '../../services/Township.service';


function StationCreate1() {
    const [p92, setp92] = useState(false);
    const [p95, setp95] = useState(false);
    const [p97, setp97] = useState(false);
    const [ds, setds] = useState(false);
    const [pds, setpds] = useState(false);
    const [checked, setChecked] = useState(false);

    const [staton,setStation] = useState('');
    const [address,setaddress] =useState('');
    const [Longitude,setLongitude]=useState('');
    const [latitude,setlatitude] = useState('');
    const [message, setMessage] = useState('');

    
    const [data,setData] = useState([]);
    const [selvalue, setSelvalue] = useState(0);
    const fruits = [];
    const error = [];
   
    if(p92 == true){
        fruits.push(92);
    }else{
        error.push(95);
    }
    if(p95 == true){
        fruits.push(95);
    }else{
        error.push(95);
    }
    if(p97 == true){
        fruits.push(97);
    }else{
        error.push(95);
    }
    if(ds == true){
        fruits.push("diesel");
    }else{
        error.push(95);
    }
    if(pds == true){
        fruits.push("premium_diesel");
    }else{
        error.push("95");
    }
   
   
  
    
    const posts = async () =>{
        
        
        const response = await getTownship();
        setData(response.townships.data);
        return; 
    }
        
    useEffect (() =>{
        posts();
    }, []);
    
    var store = async() => {
        
        
        
       
        const requestBody = {
            
            
            township_id  :selvalue,
            name: staton,
            has_gas : checked,
            address : address,
            longitude : Longitude,
            latitude : latitude,
            available_fuel : fruits
        }
        const response = await StationCreate(requestBody);
        if(response && response.status === 201)
        {
            return setMessage('success');
        }
        return setMessage("'error'");
       
    }
    
  return (
        <Card>
            <Card.Header><h4>Station</h4></Card.Header>
            <Card.Body>
            <Card.Title>Select Township</Card.Title>
        <Form.Select onChange={(e) => setSelvalue(e.target.value)} aria-label="Default select example">
            <option value={0} >Open this select menu</option>
            {data.length > 0 && data.map((v,i)=>(
                    <option key={i} value={v.id}>{v.name}</option>
            ))}
        
      </Form.Select>
 
              <Card.Title>Enter Station name</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
              <Form.Control type="text" value={staton} onChange={(e) => setStation(e.target.value)} placeholder="Enter Name" />
              
              <Card.Title>Enter Adderss</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
              <Form.Control type="text" value={address} onChange={(e) => setaddress(e.target.value)} placeholder="Enter Adderss" />
              
              <Card.Title>Enter Longitude</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
              <Form.Control type="text" value={Longitude} onChange={(e) => setLongitude(e.target.value)} placeholder="Enter Longitude" />
              
              <Card.Title>Enter latitude</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
              <Form.Control type="text" value={latitude} onChange={(e) => setlatitude(e.target.value)} placeholder="Enter  latitude" />
              

              <Card.Title>Enter available_fuel</Card.Title>
              
              <BootstrapSwitchButton value={checked} 
                    onChange={()=>setChecked(checked => !checked)} width={100} onstyle="success" offstyle="warning" onlabel='Gas' offlabel='Petrol' />

              <Form.Group className="mb-3 DD" controlId="formBasicEmail">
            
                <div>
                <input type="checkbox" 
                value={p92} 
                onChange={()=>setp92(p92 => !p92)}
                />92

            <input type="checkbox" 
                value={p95} 
                onChange={()=>setp95(p95 => !p95)}
                />95
                <input type="checkbox" 
                value={p97} 
                onChange={()=>setp97(p97 => !p97)}
                />97
                <div>
                <input type="checkbox" 
                value={ds} 
                onChange={()=>setds(ds => !ds)}
                />Diesel
                <input type="checkbox" 
                value={pds} 
                onChange={()=>setpds(pds => !pds)}
                />Premium_Diesel
                </div>
                </div>
              </Form.Group>
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" onClick={() => store()}>Add Twonship</Button>
            <span> {message != ''? message : ''} </span>
            </Card.Footer>
        </Card>
        

  )
  
}

export default StationCreate1