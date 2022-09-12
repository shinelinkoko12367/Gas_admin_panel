import React, { useState } from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth.service';

const Login = () => {

  const navigate = useNavigate()
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');

    const store = async() => {
        const requestBody = {
            email : email,
            password : password
        }
        console.log(requestBody);
        // const response = await login(requestBody);
        // console.log(response.authorisation.token);
        // localStorage.setItem('token' , response.authorisation.token);
        // if(response.authorisation.token === null) {
        //   navigate('/login')
        // }
        navigate('/')
    }

  return (
   <div>
    <div className="position-absolute top-50 start-50 translate-middle">
     <Card >
        <Card.Header className="text-center">
        <img src={require('../../assets/images/logo512.png')} width='30%'/> 
        </Card.Header>
      <Card.Body>
        <Card.Title className="text-center">Prtrol Ptation</Card.Title>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className=''>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      
    
       
      </Card.Body>
      <Card.Footer className="text-muted text-center">
      <Button variant="primary" onClick={store}>Login</Button>
      </Card.Footer>
    </Card>
   </div>

   </div>
   
  
  )
}

export default Login;
