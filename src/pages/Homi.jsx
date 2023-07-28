import React, {useEffect, useState} from "react";
// import BookCard from "../components/Card";
// import { useFirebase } from '../context/Firebase';


 const HomePage = ()=>{
    //  const firebase=useFirebase();
    //  const [books, setBooks]=useState([]);
    //  useEffect(()=>{
    //      firebase.listAllBooks().then((books) => setBooks(books.docs));
    //    // eslint-disable-next-line  
    //  },[])
return (
  <div>
  <div>
  <header>
  <section className="container main-hero-container">
       <div className="row">
         <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
           <h1 className="display-2">
           Interested in being a part of our mission ? Say!!! <br /> Gau Gram Tree
           </h1>
           <p className="main-hero-para">
           A well-balanced ecosystem, efficient natural resource use and green 
           pollution-free earth for our present and future generations and all creatures living in it.
           To sensitize people about the value and importance of the environment, environmental issues and its 
           adverse impact on our lives and empower them to contribute to a sustainable and GREEN world.
           </p>
           
         </div>
         {/*  --------------- main header right side--------------  */}
         <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center 
         align-items-center main-herosection-images">
           <img
             src="./image/main22.jpg"
             alt="heroimg"
             className="img-fluid"
           />
           <img
             src="./image/child.jpg"
             alt="heroimg4"
             className="img-fluid main-hero-img2"
           />
         </div>
       </div>
     </section>
  </header>
  </div>
  {/* <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '36px', marginTop: '20px', marginBottom: '20px', padding: '10px' }}>All Tree Plantation Details</h1> */}
  {/* <div className="container mt-5">
  <div className="row d-flex justify-content-center">
    {books.map((book) => (
      <div key={book.id} className="col-sm-3">
        <BookCard id={book.id} {...book.data()} />
      </div>
    ))}
  </div>
</div> */}

  
  </div>



  
);
};
 export default HomePage;

