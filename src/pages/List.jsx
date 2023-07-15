import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFirebase} from "../context/Firebase"
const ListingsPage=()=>{
    const firebase=useFirebase();

    const [names, setNames]=useState('');
    
    const [coverpic, setCoverpic]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await firebase.handleCreateNewListing(names, coverpic);
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
        <Form.Label>Enter User name</Form.Label>
        <Form.Control onChange={(e)=>setNames(e.target.value)}
        value={names} type="text" placeholder="user name" />
       
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