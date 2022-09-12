import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTownship } from "../../services/Township.service";
import Button from 'react-bootstrap/Button';
import TownShipTablExpandComponent from "../../components/TownShipTablExpandComponent";

const TwonTable = () => {
    const [data,setData] = useState([]);
    const [isRefresh, setIsRefresh] = useState(true);
    const posts = async () =>{
        const response = await getTownship();
        setData(response.townships.data);
        setIsRefresh(false);
        return; 
    }
    
    const retrive = (e) =>{
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
                expandableRowsComponent={TownShipTablExpandComponent}
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
            name: <span>Township Name</span>,
            selector: (row, index) => row.name,
            sortable: true,
    
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
      
        },

    ]


export default TwonTable