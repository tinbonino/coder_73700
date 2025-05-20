import { useState } from "react";


function DogApi() {

    const [perro,setPerro]= useState("");

    const handleDog = () => {
      fetch("https://dog.ceo/api/breed/poodle/images/random")
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        setPerro(data.message)
      })
      .catch(error=>console.error("Problemitas:",error))
    }

  return (
    <div>
        <h3>Imagen de perro random</h3>
        <button onClick={handleDog}>Dame un perro</button>
        { perro && <img src={perro} />}
    </div>
  )
}

export default DogApi
