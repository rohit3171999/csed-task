import React, {useEffect, useState} from "react"; 
import {useParams} from 'react-router-dom';
import { useFirebase} from '../context/Firebase';
const UserDetailPage =()=>{
    const params=useParams();
    const firebase=useFirebase();
    
    const [data, setData]=useState(null);
    const [url, setURL]=useState(null);
    useEffect(()=>{
        firebase.getBookById(params.bookId).then((value) =>setData(value.data()));
    }, []);

    useEffect(() =>{
        if(data){
            const imageURL=data.imageURL;
            firebase.getImageURL(imageURL).then((url) => setURL(url));
        }
    },[data]);



    if(data==null) return <h1>Loading....</h1>;
    return(
        <div className="container mt-5">
        <h1>{data.displayName}</h1>
        <img src={url} width="500px" style={{borderRadius: '10px'}}/>
        <h1>Details: </h1>
        
        <p> The name of image is: {data.names}</p>
        <p> User id of user is: {data.userID}</p>
        <p> UserEmail of user is: {data.userEmail}</p>
        <p> The image url is: {data.imageURL}</p>

        </div>
    );
};
export default UserDetailPage;