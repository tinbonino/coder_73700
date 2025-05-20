import { useState } from "react";


function PostApi() {

    const [response,setResponse]=useState(null);

    const handlePost = async () => {

        const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                title:"Clase 4",
                body:"Estamos disfrutando la clase 4",
                userId:2
                })
        })

        const data = await res.json()
        setResponse(data);
        
    }

  return (
    <div>
        <h2>POST rápido con JSONPlaceholder</h2>
      <button onClick={handlePost}>Enviar POST</button>

      {response && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Respuesta:</strong>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default PostApi