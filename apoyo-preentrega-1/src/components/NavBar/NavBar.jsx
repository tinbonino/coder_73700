import "./NavBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
        <div>
            <img className="logo" src={logo} alt="Logo de la marca" />
        </div>
        
       
        <CartWidget/>
    </nav>
    
  )
}

export default NavBar