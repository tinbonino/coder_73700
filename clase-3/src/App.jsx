import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EjemploSimpleUseEffect from './components/EjemploSimpleUseEffect'
import EjemploUseEffect from './components/EjemploUseEffect';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {


  return (
    <>
      {/* <EjemploSimpleUseEffect/> */}
      {/* <EjemploUseEffect/> */}
      <ItemListContainer/>
    </>
  )
}

export default App
