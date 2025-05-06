

function Button({color,onClick,label,children}) {

    const style ={
        backgroundColor:color || "blue",
        padding:"10px 20px",
        border: "none",
        color:"#fff",
        cursor:"pointer"
    }


  return (
    <button style={style} onClick={onClick}>{children}</button>
  )
}

export default Button