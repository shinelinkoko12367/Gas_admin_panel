import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getRegion } from "../services/Region.service";
import Button from 'react-bootstrap/Button';

const Table1 = () => {
    const [data,setData] = useState([]);
    const posts = async () =>{
       
        const response = await getRegion();
 
        setData(response.regions.data);
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
            name: <span>Region Name</span>,
            selector: (row, index) => row.name,
            sortable: true,
            width: '150px'
        },
        {
            name: <span>Action</span>,
            selector: row => (
                <>
                    <Button variant="warning"> Edit </Button>
                    <Button variant="danger">Delete</Button>
                </>
                
            ),
            width: '200px'
        },

    ]


export default Table1