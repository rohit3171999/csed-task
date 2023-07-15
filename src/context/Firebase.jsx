import {createContext, useContext, useState, useEffect} from "react";
import { initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword 
    , onAuthStateChanged } from "firebase/auth";
import {getFirestore, collection, addDoc, getDocs,getDoc, doc} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"; 

const FirebaseContext=createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyACPmoI3-YTTnWIv5AjGz8zkxGXYNXEDrk",
    authDomain: "bookify-3b401.firebaseapp.com",
    projectId: "bookify-3b401",
    storageBucket: "bookify-3b401.appspot.com",
    messagingSenderId: "918443449165",
    appId: "1:918443449165:web:999133a6415910c0bfb504"
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
     
   

    const handleCreateNewListing=async (names, coverpic)=>{
        const imageRef=ref(storage, `uploads/images/${Date.now()}-${coverpic.name}`);
        const uploadResult = await uploadBytes(imageRef, coverpic);
        return await addDoc(collection(firestore,"books"),{
            names,
            imageURL: uploadResult.ref.fullPath,
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
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
    const getImageURL=(path)=>{
        return getDownloadURL(ref(storage, path))

    }




    const isLoggedin =user ? true : false;
    return <FirebaseContext.Provider value={{ 
    signupWithEmailAndPassword, 
    signinUserWithEmailAndPass,
    handleCreateNewListing,
    listAllBooks,
    getImageURL,
    getBookById,
    isLoggedin}}>{props.children}</FirebaseContext.Provider>
};