import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getPirce, getPosts } from "../../services/Price.service";
import Button from 'react-bootstrap/Button';
import PriceTablExpandComponent from "../../components/PriceTablExpandComponent";

const PriceTable = () => {
    const [data,setData] = useState([]);
    const [isRefresh, setIsRefresh] = useState(true);
    const posts = async () =>{
        const response = await getPirce();
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
            <div className='container' >
                <DataTable
                expandableRows
                expandableRowsComponent={PriceTablExpandComponent}
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
            
    

        },
        {
            name: <span>Date</span>,
            selector: (row, index) => row.date,
           

        },
        {
            name: <span>Fuels</span>,
            selector: (row, index) => row.fuel_type,
            

        },
        {
            name: <span>Price</span>,
            selector: (row) => row.price,

        },
        {
            name: <span>Action</span>,
            selector: row => (
                <>
                    <Button variant="warning"> Edit </Button>
                    <Button variant="danger">Delete</Button>
                </>
                
            ),
  
        },

    ]


export default PriceTable