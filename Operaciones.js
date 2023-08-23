const fs = require("fs");

const createFile = (data, callback) => {
  let citas = [];

  try {
    const citasJSON = fs.readFileSync("citas.json", "utf-8");
    citas = JSON.parse(citasJSON);
  } catch (error) {
    console.log("Existe el error en:", error);
  }

  citas.push(data);

  const dataJSON = JSON.stringify(citas, null, 2);

  fs.writeFileSync("citas.json", dataJSON, (error) => {
    if (error) {
      console.error("Error al crear el archivo:", error);
      return;
    }

    callback();
  });
};

const readFile = () => {
  try {
    const registroCitas = fs.readFileSync("citas.json", "utf-8");
    JSON.parse(registroCitas).forEach((paciente) => {
      console.log(
        `Paciente: ${paciente.nombreAnimal} / Edad: ${paciente.edad} / Enfermedad: ${paciente.Enfermedad}`
      );
    });
  } catch (error) {}
};

module.exports = {
  createFile,
  readFile,
};
