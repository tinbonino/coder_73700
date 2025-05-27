import { Link } from "react-router-dom"

function Producto({nombre,descripcion,precio,id}) {
  return (
    <Link to={`/productos/${id}`} className="card">
        <h2>{nombre}</h2>
        {/* <h4>{descripcion}</h4> */}
        <h2>${precio}</h2>
    </Link>
  )
}

export default Producto