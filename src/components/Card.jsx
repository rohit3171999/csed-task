



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from '../context/Firebase';
import "./BookCard.css";

const BookCard = (props) => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [url, setURL] = useState(null);
  

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then((url) => setURL(url));
  }, []);

  console.log(props);

  return (
    <div className="card-container" style={{ width: '300px', height: '450px' }}>
      <Card className="card " style={{ width: '100%', height: '100%', margin: '20px 20px 15px'}}>
        <Card.Img variant="top" src={url} className="card-img-top" />
        <Card.Body>
          <Card.Title>{props.displayName}</Card.Title>
          <Card.Text>UTID :- {props.names}</Card.Text>
          <Card.Text> सेक्टर नंबर :- {props.plot}</Card.Text>
          <Card.Text>दिनांक :- {props.selectedDate}</Card.Text>

          <Card.Text>वृक्ष प्रजाति :- {props.tree}</Card.Text>
          <Card.Text>वर्तमान स्थिति :-{props.status}</Card.Text>
          <Card.Text>पालक नाम:- {props.treeNumber}</Card.Text>
          
          <Button
            onClick={(e) => navigate(`/book/view/${props.id}`)}
            variant="outlined"
            className="view-button"
          >
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
