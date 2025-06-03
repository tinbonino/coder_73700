import Button from './components/Button';
import ClicksCounter from './components/ClicksCounter';
import './App.css'

function App() {


  return (
    <>
    <Button  label="Boton 1" onClick={()=>alert("Botón Clickeado")}>
      Boton Loco
    </Button>
    <Button color="crimson" label="Boton 2" onClick={()=>alert("Botón Clickeado")}>Boton Children 2</Button>
    <Button color="grey" label="Otro Boton" onClick={()=>alert("Botón Clickeado")}>Boton Hijo 3</Button>
    <Button color="red" label="Otro mas" onClick={()=>alert("Botón Clickeado")}>Boton Hijo 4</Button>
    <ClicksCounter/>
    </>
  )
}

export default App
