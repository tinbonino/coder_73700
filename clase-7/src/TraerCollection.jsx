import { collection,getDocs,getFirestore } from "firebase/firestore";
import { useEffect } from "react";

function TraerCollection() {

    useEffect(() => {
      const db = getFirestore();

      const itemCollection = collection(db,"Items");

      // Traemos los datos

      getDocs(itemCollection).then(snapshot=>snapshot.docs.map(docu=>
      {
        console.log(docu.data())
        console.log(docu.id);
      }
      ))
    },[])
  return (
    <div>TraerCollection</div>
  )
}

export default TraerCollection