import React, {useEffect, useState} from "react";
import BookCard from "../components/Card";
import { useFirebase } from '../context/Firebase';
const HomePage = ()=>{
    const firebase=useFirebase();

    const [books, setBooks]=useState([]);

    useEffect(()=>{
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    },[])
    return <div className="container mt-5">
    {
        books.map(book =>
        <BookCard key={book.id} id={book.id}{...book.data()}/>
        )
    }
    </div>;
    
};
export default HomePage;