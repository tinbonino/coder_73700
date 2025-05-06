// Desestructurando arrays

let nombres=["Mariano","Juan","Pedro","Lucas"];

// let nombre1=nombres[0];
// let nombre2=nombres[1];
// let nombre3=nombres[2];
// let nombre4=nombres[3];

let [nombre1,nombre2,nombre3,nombre4] = nombres;

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
console.log(nombre4);

let [name1,,,name4] = nombres;
console.log("------------------------------------")
console.log(name1);
console.log(name4);

let [n1,...otros] = nombres;

console.log("------------------------------------")
console.log(n1);
console.log(otros)

// Desestructurando objetos

let estudiante = {
    nombre: "Belen",
    apellido: "Villar",
    curso: "React"
}

console.log("------------------------------------")
console.log(estudiante.nombre)

let {apellido,nombre,curso}=estudiante;
console.log("------------------------------------")
console.log(nombre)
console.log(apellido)
console.log(curso)

let {nombre:name,apellido:surname,curso:course}=estudiante;
console.log("------------------------------------")
console.log(name);
console.log(surname);
console.log(curso);