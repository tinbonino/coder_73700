import { addDoc,collection,getFirestore } from "firebase/firestore"

function Agregar() {
    const item = {
        title: "Empanada",
        description:"Deliciosa empanada de humita",
        categoryId: "Comida",
        imageId:"empanada.jpg",
        Price:1500
    }
    // Conectamos a la db
    
    const db = getFirestore();

    // Referenciamos el elemento

    const itemCollection = collection(db,"Items");

    addDoc(itemCollection,item).then(({id})=>{
        console.log(id);
        console.log("Producto agregado correctamente")
    })

  return (
    <div>Agregando Item</div>
  )
}

export default Agregar