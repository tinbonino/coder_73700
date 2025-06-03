import { useState } from "react";



function ClicksCounter() {

    const [count,setCount]= useState(0);
    //     estado  funcion          valor
    //           actualizadora     inicial

    const handleClick = () => {
        setCount(count+1)
    }

  return (
    <div>
        <h1>A contar clicks</h1>
        <p>Clickeaste {count}  veces</p>
        <button onClick={handleClick}>Clickeame!</button>
    </div>
  )
}

export default ClicksCounter