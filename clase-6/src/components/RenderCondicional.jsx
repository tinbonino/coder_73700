import { useState } from "react"

function RenderCondicional() {
  const [mostrar,setMostrar] = useState(false);

  const handleClick = () => {
    setMostrar(!mostrar);
  }

  const renderConIf = () => {
    if(mostrar){
      return <h2>Este texto se muestra con un if si el estado es TRUE</h2>
    } 
    return <h2>Este texto se muestra con un if si el estado es FALSE</h2>
  }

  return (
    <div>
      <h1>Renderizado Condicional</h1>
      <button onClick={handleClick}>{mostrar?"Ocultar":"Mostrar"}</button>
      {renderConIf()}
      {mostrar? <h2>Este texto se muestra con un ternario en el render si el estado es TRUE</h2>
      :<h2>Este texto se muestra con un ternario en el render si el estado es FALSE </h2>}
      {mostrar && <h2>Este texto se muestra con un and en el render si el estado es TRUE</h2>}
      {(() => {
        if(mostrar){
           return <h2>Este texto se muestra con un if en una funcion autoinvocada si el estado es TRUE</h2>
        }
         return <h2>Este texto se muestra con un if en una funcion autoinvocada si el estado es FALSE</h2>
      }

      )()}
    </div>
  )
}

export default RenderCondicional