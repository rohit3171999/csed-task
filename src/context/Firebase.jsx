import {createContext, useContext, useState, useEffect} from "react";
import { initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword 
    , onAuthStateChanged } from "firebase/auth";
import {getFirestore, collection, addDoc, getDocs,getDoc, doc} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"; 

const FirebaseContext=createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyBgXk3XxSfJ3lMCsl3RYcohdeYymA2GAxQ",
    authDomain: "gau-gram-tree.firebaseapp.com",
    projectId: "gau-gram-tree",
    storageBucket: "gau-gram-tree.appspot.com",
    messagingSenderId: "611880399469",
    appId: "1:611880399469:web:6db5b6192767b9c0210564"
  };
export const useFirebase=()=>useContext(FirebaseContext);
const firebaseApp=initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp);
const firestore=getFirestore(firebaseApp);
const storage=getStorage(firebaseApp);



export const FirebaseProvider=(props)=>{
const [user, setUser]=useState(null);
useEffect(()=>{
    onAuthStateChanged(firebaseAuth, user=>{
        if(user) setUser(user);
        else setUser(null);   
    });
},[]);


  
    const signupWithEmailAndPassword=(email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);
    const signinUserWithEmailAndPass = (email, password)=>signInWithEmailAndPassword(firebaseAuth, email, password);
     
   

    const handleCreateNewListing=async (names, plot, selectedDate,tree, treeNumber, status,  coverpic)=>{
        const imageRef=ref(storage, `uploads/images/${Date.now()}-${coverpic.name}`);
        const uploadResult = await uploadBytes(imageRef, coverpic);
        return await addDoc(collection(firestore,"books"),{
            names,
            plot,
            selectedDate,
            tree,
            treeNumber,
            status,
            
            
            imageURL: uploadResult.ref.fullPath,
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,

        });
    };

    const handleCreateNewListing2=async (generatedID, palakName, otherInfo)=>{
        
        return await addDoc(collection(firestore,"books_new"),{
            generatedID, palakName, otherInfo

        });
    };


    const listAllBooks=()=>{
        return getDocs(collection(firestore, 'books'));
    };
 

    const getBookById=async(id)=>{
        const docRef=doc(firestore, 'books', id);
        const result=await getDoc(docRef);
        return result;
    }

    
    // const getImageURL=(path)=>{
    //      return getDownloadURL(ref(storage, path))

    //  }

    const getImageURL = async (path) => {
        try {
            const imageRef = ref(storage, path);
            const url = await getDownloadURL(imageRef);
            return url;
        } catch (error) {
            // Handle the error (e.g., logging, displaying an error message)
            console.error("Error getting image URL:", error);
            return null;
        }
    }


    
    const isLoggedin =user ? true : false;
    return <FirebaseContext.Provider value={{ 
    signupWithEmailAndPassword, 
    signinUserWithEmailAndPass,
    handleCreateNewListing,
    handleCreateNewListing2,
    
    listAllBooks,
    
    getBookById,
    
    getImageURL,
    isLoggedin}}>{props.children}</FirebaseContext.Provider>
};