// import React, { useEffect, useState } from "react";
// import BookCard from "../components/Card";
// import { useFirebase } from '../context/Firebase';

// const HomePage2 = () => {
//   const firebase = useFirebase();
//   const [books, setBooks] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   useEffect(() => {
//     firebase.listAllBooks().then((books) => setBooks(books.docs));
//     // eslint-disable-next-line  
//   }, [])

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const booksSnapshot = await firebase.listAllBooks();
//         let filteredBooks = booksSnapshot.docs.map(doc => doc.data());

//         if (searchQuery) {
//           filteredBooks = filteredBooks.filter(book =>
//             book.treeNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             book.names.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             book.plot.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             book.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             book.tree.toLowerCase().includes(searchQuery.toLowerCase())
//           );
//         }

//         setBooks(filteredBooks);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       }
//     };

//     fetchBooks();
//   }, [firebase, searchQuery]);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
    
//     <div>
//       <h1 style={{
//         textAlign: 'center', fontWeight: 'bold', fontSize: '36px', marginTop: '20px',
//         marginBottom: '20px', padding: '10px'
//       }}>वृक्षारोपण का विवरण</h1>

//       {/* Add the search bar */}
//       <div className="container mt-3">
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search Data"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="container mt-5">
//         <div className="row d-flex justify-content-center">
//           {books.map((book) => (
//             <div key={book.id} className="col-sm-3">
//               <BookCard id={book.id} {...book} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage2;