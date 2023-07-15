import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase} from '../context/Firebase';


const BookCard =(props)=>{
    const firebase=useFirebase();
    const navigate=useNavigate();
    const[url, setURL]=useState(null);
    useEffect(() =>{
        firebase.getImageURL(props.imageURL).then((url) => setURL(url));
    }, []);

    console.log(props);


    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{props.displayName}</Card.Title>
        <Card.Text>
          The name of image is  {props.names} and the user id  is {props.userID} and the 
          user email is {props.userEmail}
        </Card.Text>
        <Button onClick={e => navigate(`/book/view/${props.id}`)} variant="primary">View</Button>
      </Card.Body>
    </Card>
        
    )
};
export default BookCard;