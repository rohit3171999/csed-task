

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
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '20px' }}>
                    <img src={url} width="500px" style={{ borderRadius: '10px' }} />
                    
                </div>
                <div style={{
                    fontSize: 20,
                    color: 'green',
                    marginLeft: 30
                }}>
                <h1>पौधे का विवरण: </h1>
                <br/>
                    <h1>{data.displayName}</h1>
                    <p> UTID :- {data.names}</p>
                    <p> सेक्टर नंबर :- {data.plot}</p>
                    <p> दिनांक :- {data.selectedDate}</p>
                    <p> वृक्ष प्रजाति :- {data.tree}</p>
                    <p> पालक नाम :- {data.treeNumber}</p>
                    <p> वर्तमान स्थिति :- {data.status}</p>
                    <p> UserEmail of user is: {data.userEmail}</p>
                    <p> पौधे की फोटो की यूआरएल: {data.imageURL}</p>
                </div>
            </div>
        </div>
    );
};
export default UserDetailPage;