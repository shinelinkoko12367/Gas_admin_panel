// import { useEffect, useState } from "react";
// import { getRegion } from "../../services/Region.service";
// import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';


// const TownshipSelect = () => {
//     const [data,setData] = useState([]);
//     const [selvalue, setSelvalue] = useState(0);
//     const posts = async () =>{
//         const response = await getRegion();
//         setData(response.regions.data);
//         return; 
//     }
    
//     console.log(selvalue)
//     useEffect (() =>{
//         posts();
//     }, []);
//     return (
//         <Form.Select onChange={(e) => setSelvalue(e.target.value)} aria-label="Default select example">
//         <option value={0} >Open this select menu</option>
//         {data.length > 0 && data.map((v,i)=>(
//                 <option key={i} value={v.id}>{v.name}</option>
//         ))}
        
//       </Form.Select>
//         )
// }
// export default TownshipSelect