import { useState,useEffect } from 'react'
import {getFirestore,doc,getDoc} from "firebase/firestore";
import Agregar from './Agregar';
import TraerCollection from './TraerCollection';
import './App.css'

function App() {
  const [data,setData]=useState({});

  const db = getFirestore();

  // useEffect(() => {
  //   // Creo la referencia al elemento
  //   const itemRef = doc(db,"Items","091LMbotUGHGyT8Nd22Q");

  //   // Traigo el elemento

  //   getDoc(itemRef).then(snapshot=>{
  //     console.log(snapshot);
  //     console.log(snapshot.data());
  //     setData(snapshot.data());
  //     <TraerCollection/>
  //   })
  // },[])

  return (
    <>
     {/* <h2>{data.title}</h2>
     <h3>{data.description}</h3>
     <h4>{data.Price}</h4> */}
    {/* <Agregar/> */}
    <TraerCollection/>
    </>
  )
}

export default App
