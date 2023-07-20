// import React, {useState, useEffect} from "react";
// import {useNavigate} from 'react-router-dom';
// //import Button from 'react-bootstrap/Button';
// import Button from '@mui/material/Button';
// import Card from 'react-bootstrap/Card';
// import { useFirebase} from '../context/Firebase';


// const BookCard =(props)=>{
//     const firebase=useFirebase();
//     const navigate=useNavigate();
//     const[url, setURL]=useState(null);
//     useEffect(() =>{
//         firebase.getImageURL(props.imageURL).then((url) => setURL(url));
//     }, []);

//     console.log(props);


//     return(
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={url} />
//       <Card.Body>
//         <Card.Title>{props.displayName}</Card.Title>
//         <Card.Text>
//           The name of image is  "{props.names}"
//         </Card.Text>
//         <Card.Text>
//           The user id  is:- {props.userID} 
//         </Card.Text>
//         <Card.Text> 
//           User email is:- {props.userEmail}
//         </Card.Text>
//         <Button onClick={e => navigate(`/book/view/${props.id}`)} variant="outlined">View</Button>
        
//       </Card.Body>
//     </Card>
        
//     )
// };
// export default BookCard;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from '../context/Firebase';
import "./BookCard.css"; // Make sure to replace 'BookCard.css' with the actual name of your CSS file

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
          <Card.Text>The name of image is "{props.names}"</Card.Text>
          <Card.Text>The user id is: {props.userID}</Card.Text>
          <Card.Text>User email is: {props.userEmail}</Card.Text>
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
