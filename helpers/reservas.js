import inquirer from "inquirer";
import { escribirHistorial } from "./historial.js";
import { enviarCorreo } from "./correo.js";
import {
  mostrarSaludo,
  mostrarDisponibilidadPlazas,
  reservarPlazas,
  confirmarReserva,
  preguntarEnviarCorreo,
  pedirDireccionCorreo,
} from "./funciones.js";

let plazasDisponibles = 50;

const realizarReserva = async () => {
  console.log("Realizando una reserva".yellow);

  if (plazasDisponibles === 0) {
    console.log("No quedan plazas disponibles".red);
    return;
  }

  let datosUsuario;
  do {
    datosUsuario = await inquirer.prompt([
      {
        type: "input",
        name: "nombre",
        message: "Introduce tu nombre:",
        validate: (input) => input.trim() !== "",
      },
      {
        type: "input",
        name: "apellido1",
        message: "Introduce tu primer apellido:",
        validate: (input) => input.trim() !== "",
      },
      {
        type: "input",
        name: "apellido2",
        message: "Introduce tu segundo apellido:",
        validate: (input) => input.trim() !== "",
      },
    ]);

    console.clear();

    mostrarSaludo(
      datosUsuario.nombre,
      datosUsuario.apellido1,
      datosUsuario.apellido2
    );
    mostrarDisponibilidadPlazas();

    const cantidadPlazas = await reservarPlazas();

    console.clear();

    mostrarSaludo(
      datosUsuario.nombre,
      datosUsuario.apellido1,
      datosUsuario.apellido2
    );
    mostrarDisponibilidadPlazas();
    console.log(`Has reservado ${cantidadPlazas} plaza(s).`.green);

    const confirmar = await confirmarReserva();

    if (confirmar) {
      const enviarCorreoRespuesta = await preguntarEnviarCorreo();

      let emailUsuario = "";
      if (enviarCorreoRespuesta) {
        emailUsuario = await pedirDireccionCorreo();
        await enviarCorreo(emailUsuario, datosUsuario, cantidadPlazas);
        console.log(`Datos de la reserva enviados a ${emailUsuario}.\n`.green);
      }

      escribirHistorial(datosUsuario, emailUsuario, cantidadPlazas);
    } else {
      console.log("Reserva cancelada.\n".yellow);
    }
  } while (
    !datosUsuario.nombre ||
    !datosUsuario.apellido1 ||
    !datosUsuario.apellido2
  );
};

export { realizarReserva };
