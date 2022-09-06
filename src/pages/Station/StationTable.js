import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getPosts, getStation } from "../../services/Station.service";
import Button from 'react-bootstrap/Button';

const SattionTable = () => {
    const [data,setData] = useState([]);
    const posts = async () =>{
        const response = await getStation();
        setData(response.stations.data);
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
            name: <span>Station Name</span>,
            selector: (row, index) => row.name,
            sortable: true,
            width: '150px'
        },
        {
            name: <span>Address</span>,
            selector: (row) => row.address,
            sortable: true,
            width: '150px'
        },
        {
            name: <span>longitude</span>,
            selector: (row) => row.longitude,
            sortable: true,
            width: '150px'
        },
        {
            name: <span>latitude</span>,
            selector: (row) => row.latitude,
            sortable: true,
            width: '150px'
        },
        {
            name: <span>available_fuel</span>,
            selector: (row) => row.available_fuel,
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


export default SattionTable