import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTownship } from "../../services/Township.service";
import Button from 'react-bootstrap/Button';

const TwonTable = () => {
    const [data,setData] = useState([]);
    const posts = async () =>{
        const response = await getTownship();
        setData(response.townships.data);
        return; 
    }
    
    
    useEffect (() =>{
        posts();
    }, []);
    return (
            <div className='container' >
                <DataTable className="striped bordered hover" columns={columns} data={data}/>
             
             
            </div>
        )
}



    const columns = [
        {
            name: <span>No</span>,
            selector: (row, index) => index + 1,
            sortable: true,
    
            width: '60px'
        },
        {
            name: <span>Township Name</span>,
            selector: (row, index) => row.name,
            sortable: true,
            width: '150px'
        },
        {
            name: <span>Action</span>,
            selector: row => (
                <>
                    <Button variant="success">Detial</Button>
                    <Button variant="warning"> Edit </Button>
                    <Button variant="danger">Delete</Button>
                   
                </>
                
            ),
            width: '300px'
        },

    ]


export default TwonTable