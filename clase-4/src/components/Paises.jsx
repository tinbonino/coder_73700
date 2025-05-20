import { useEffect } from "react";

function Paises() {

    useEffect(() => {
      fetch("https://restcountries.com/v3.1/name/japan")
      .then(response=>response.json())
      .then(data=>console.log(data[0].capital[0]))
      .catch(error=>console.error("Error trayendo la informacion",error))
    },[])

  return (
    <div>Paises</div>
  )
}

export default Paises