import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from "../context/Firebase"
const ListingsPage=()=>{
    const firebase=useFirebase();

    const [names, setNames]=useState('');
    const [plot, setPlot]=useState('');
    const [tree, setTree]=useState('');
    const [selectedDate, setSelectedDate] = useState("");


    
    const [coverpic, setCoverpic]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await firebase.handleCreateNewListing(names, plot, tree, selectedDate, coverpic);
    };
    const setImageFnc = (e)=>{
        setCoverpic(e.target.files[0])
        // setCoverpic("i am the cover pic")
        //console.log("helloworld")
    };
    return(
        <div className="container mt-5">
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Image name</Form.Label>
        <Form.Control onChange={(e)=>setNames(e.target.value)}
        value={names} type="text" placeholder="image name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Plot Number</Form.Label>
        <Form.Control onChange={(e)=>setPlot(e.target.value)}
        value={plot} type="text" placeholder="plot number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Tree Specification</Form.Label>
        <Form.Control onChange={(e)=>setTree(e.target.value)}
        value={tree} type="text" placeholder="tree specifications" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Date</Form.Label>
        <Form.Control onChange={(e)=>setSelectedDate(e.target.value)}
        value={selectedDate} type="date" placeholder="Select date" />
      </Form.Group>

      
{/* 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>CoverPic</Form.Label>
        <Form.Control onChange={setImageFnc}
        value={coverpic}type="file" />
      </Form.Group> */}
      <div className="mb-3">
          <label htmlFor="coverPicInput">CoverPic</label>
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

    );
};
export default ListingsPage;