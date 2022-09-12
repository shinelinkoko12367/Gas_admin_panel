import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getPosts, getStation } from "../../services/Station.service";
import Button from 'react-bootstrap/Button';
import StationShipTablExpandComponent from "../../components/StationShipTablExpandComponent";

const SattionTable = () => {
    const [data,setData] = useState([]);
    const [isRefresh, setIsRefresh] = useState(true);

    
    const posts = async () =>{
        const response = await getStation();
        setData(response.stations.data);
        setIsRefresh(false);
        return; 
    }
    const retrive = (e) => {
        setIsRefresh(e);
    }
    
    
    useEffect (() =>{
        if(isRefresh){
            posts();
        }
    }, [isRefresh]);
    return (
            <div className='container' >
                <DataTable
                expandableRows
                expandableRowsComponent={StationShipTablExpandComponent} 
                expandableRowsComponentProps={{"refresh" : (e) => retrive(e)}}
                className="striped bordered hover" 
                columns={columns} 
                data={data}/>
             
             
            </div>
        )
}



    const columns = [
        {
            name: <span>No</span>,
            selector: (row, index) => index + 1,
            sortable: true,
          

        },

        {
            name: <span>Station Name</span>,
            selector: (row, index) => row.name,
            sortable: true,
        
        },
        {
            name: <span>Address</span>,
            selector: (row) => row.address,
            sortable: true,
         
        },
        {
            name: <span>latitude</span>,
            selector: (row) => row.latitude,
            sortable: true,
         
        },
        {
            name: <span>longitude</span>,
            selector: (row) => row.longitude,
            sortable: true,
         
        },

        {
            name: <span>available_fuel</span>,
            selector: (row) => row.available_fuel,
            sortable: true,
        },
        
        
        {
            name: <span>Action</span>,
            selector: row => (
                <>
                    {/* <Button variant="warning"> Edit </Button> */}
                   
                    <Button variant="danger">Delete</Button>
                </>
                
            ),
            
         
           
        },

    ]


export default SattionTable