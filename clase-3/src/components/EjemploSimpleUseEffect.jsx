import { useState, useEffect } from "react";


function EjemploSimpleUseEffect() {
    const[count,setCount] = useState(0);
    const[titulo,setTitulo]=useState("");

    // Montaje del componente

    useEffect(() => {
      console.log("Primera vez que se renderiza el componente")
    },[])

    // Cuando se actualiza count

    useEffect(() => {
      console.log("Se actualizó count")
    },[count])

    // Cuando se actualiza título

    useEffect(() => {
      console.log("Se actualizó título")
    },[titulo])

   

    console.log("Se renderiza el componente mas barato")
  return (
    <div>
        <h2>{titulo}</h2>
        <h2>Contador: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Aumentar contador</button>
        <button onClick={()=>setTitulo("Empanada")}>Cambiar título por Empanada</button>
    </div>
  )
}

export default EjemploSimpleUseEffect