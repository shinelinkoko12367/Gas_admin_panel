import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getPirce, getPosts } from "../../services/Price.service";
import Button from 'react-bootstrap/Button';

const PriceTable = () => {
    const [data,setData] = useState([]);
    const posts = async () =>{
        const response = await getPirce();
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
            name: <span>Station</span>,
            selector: (row, index) => row.station_id,
            sortable: true,
    
            width: '150px'
        },
        {
            name: <span>Gas</span>,
            selector: (row, index) => row.fuel_type,
            sortable: true,
            width: '150px'
        },
        {
            name: <span>Price</span>,
            selector: (row) => row.price,
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


export default PriceTable