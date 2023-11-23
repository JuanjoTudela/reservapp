// funciones.js
import inquirer from "inquirer";
import "colors";

let plazasDisponibles = 50;
let plazasOcupadas = 0;

const mostrarSaludo = (nombre, apellido1, apellido2) => {
  console.log(`¡Hola ${nombre} ${apellido1} ${apellido2}!\n`.green);
};

const mostrarDisponibilidadPlazas = () => {
  console.log(`Plazas disponibles: ${plazasDisponibles}`);
  console.log(`Plazas ocupadas: ${plazasOcupadas}`);
};

const reservarPlazas = async () => {
  let cantidadPlazas;
  
  do {
    const reservaUsuario = await inquirer.prompt([
      {
        type: "input",
        name: "cantidadPlazas",
        message: "¿Cuántas plazas deseas reservar?",
        validate: (input) => {
          cantidadPlazas = parseInt(input, 10);
          return !isNaN(cantidadPlazas) && cantidadPlazas > 0 && cantidadPlazas <= plazasDisponibles
            ? true
            : `Debes introducir un número válido, al menos una plaza y no más de ${plazasDisponibles}.`;
        },
      },
    ]);
  } while (isNaN(cantidadPlazas)); // Aseguramos que la cantidad sea un número válido

  plazasDisponibles -= cantidadPlazas;
  plazasOcupadas += cantidadPlazas;

  return cantidadPlazas;
};


const confirmarReserva = async () => {
  const confirmacionReserva = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirmarReserva",
      message: "¿Quieres confirmar la reserva?",
      default: true,
    },
  ]);

  return confirmacionReserva.confirmarReserva;
};

const preguntarEnviarCorreo = async () => {
  const enviarPorCorreoRespuesta = await inquirer.prompt([
    {
      type: "confirm",
      name: "enviarPorCorreo",
      message: "¿Quieres recibir los datos de la reserva por correo?",
      default: true,
    },
  ]);

  return enviarPorCorreoRespuesta.enviarPorCorreo;
};

const pedirDireccionCorreo = async () => {
  const emailPrompt = await inquirer.prompt([
    {
      type: "input",
      name: "email",
      message:
        "Introduce tu dirección de correo para recibir los datos de la reserva:",
      validate: (input) => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(input)
          ? true
          : "Por favor, introduce una dirección de correo electrónico válida.";
      },
    },
  ]);

  return emailPrompt.email;
};

export {
  mostrarSaludo,
  mostrarDisponibilidadPlazas,
  reservarPlazas,
  confirmarReserva,
  preguntarEnviarCorreo,
  pedirDireccionCorreo,
};
