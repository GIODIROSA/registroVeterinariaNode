const { createFile, readFile } = require("./Operaciones.js");

const argumentos = process.argv.slice(2);

const [operaciones] = argumentos;

const propiedades = [
  "Operaciones",
  "nombreAnimal",
  "edad",
  "tipoAnimal",
  "colorAnimal",
  "Enfermedad",
];

const newRegistro = {};

for (let i = 0; i < propiedades.length; i++) {
  newRegistro[propiedades[i]] = argumentos[i] || "";
}

if (operaciones === "registrar") {
  console.log("Registrando paciente ...");
  createFile(newRegistro, () => {
    console.log("Función createFile completada");
  });
} else if (operaciones === "leer") {
  console.log("Leyendo Registro ...");

  setTimeout(() => {
    readFile();
  }, "1000");
} else {
  console.log("Debe introducir las palabras clave registrar o leer");
}

console.log("___________________________________________");
