import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getRegion } from "../services/Region.service";
import Button from 'react-bootstrap/Button';
import TablExpandComponent from "../components/TablExpandComponent";

const Table1 = () => {
    const [isRefresh, setIsRefresh] = useState(true);


    const editTask = (row) => {
        setShow(true);
        console.log(row);
    
    }

    const columns = [
        {
            name: <span>No</span>,
            selector: (row, index) => index + 1,
            sortable: true,

        },
        {
            name: <span>Region Name</span>,
            selector: (row, index) => row.name,
            sortable: true,

        },
        {
            name: <span>Action</span>,
            accessor: 'action',
            selector: (row) => (
                <>
                <div>
                     <Button onClick={() => editTask(row)}>Test</Button>

                </div>
                   
                     
                </>
                
            ),
           
        },

    ]
    
    const [data,setData] = useState([]);
    const [show, setShow] = useState(false);

    const posts = async () =>{
     
        const response = await getRegion();
 
        setData(response.regions.data);
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
        <>
        
            <div className='container' >
                <DataTable 
                expandableRows
                expandableRowsComponent={TablExpandComponent}
                expandableRowsComponentProps={{"refresh" : (e) => retrive(e)}}
                className="striped bordered hover" 
                columns={columns} 
                data={data}/>
            </div>


            </>
        )
         
          
}
export default Table1