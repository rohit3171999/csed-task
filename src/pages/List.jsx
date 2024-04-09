import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from "../context/Firebase";


const ListingsPage=()=>{
    const firebase=useFirebase();

    const [names, setNames]=useState('');
    const [plot, setPlot]=useState('');
    const [tree, setTree]=useState('');
    const [treeNumber, settreeNumber]=useState('');
    const [selectedDate, setSelectedDate] = useState("");
    const [status, setStatus]=useState('');
    const [coverpic, setCoverpic]=useState('');
    
    // const [searchId, setSearchId] = useState('');
    // const [searchResult, setSearchResult] = useState([]);
   
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await firebase.handleCreateNewListing(names, plot,  selectedDate,tree, treeNumber, status,coverpic);
    };
    const setImageFnc = (e)=>{
        setCoverpic(e.target.files[0])
        
    };
    return(
      <div  className = "img-fluid"
      style = {{
         backgroundImage:
         'url("https://i.ibb.co/M2N4byF/2222222222222.jpg")',
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         height: "100vh",
        display: "flex",
        flexDirection: 'row',      
      }}>   
       <div>     
    
        <div className="container mt-5 " style={{
          
          marginLeft: 150,
          marginTop: 40,
          fontSize: 15,
          width: 700
        }}>       
        <Form className="" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>यू.टी.आई.डी</Form.Label>
        <Form.Control onChange={(e)=>setNames(e.target.value)}
        value={names} type="text" placeholder="यू.टी.आई.डी" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> सेक्टर नंबर</Form.Label>
        <Form.Control onChange={(e)=>setPlot(e.target.value)}
        value={plot} type="text" placeholder="सेक्टर नंबर" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> वृक्ष प्रजाति</Form.Label>
        <Form.Control onChange={(e)=>setTree(e.target.value)}
        value={tree} type="text" placeholder="वृक्ष प्रजाति" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> पालक नाम</Form.Label>
        <Form.Control onChange={(e)=>settreeNumber(e.target.value)}
        value={treeNumber} type="text" placeholder="पालक नाम" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>दिनांक</Form.Label>
        <Form.Control onChange={(e)=>setSelectedDate(e.target.value)}
        value={selectedDate} type="date" placeholder="दिनांक" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>वर्तमान स्थिति</Form.Label>
        <Form.Control onChange={(e)=>setStatus(e.target.value)}
        value={status} type="text" placeholder="वर्तमान स्थिति" />
      </Form.Group>

    
      <div className="mb-3">
          <label htmlFor="coverPicInput">पौधे का फोटो</label>
          <input
            type="file"
            className="form-control"
            id="coverPicInput"
            onChange={setImageFnc}
            accept="image/*"
          />
        </div>
      <Button variant="primary" type="submit" >
        Create
      </Button>
    </Form>
    
        </div>
        </div>
        </div>

    );
};
export default ListingsPage;