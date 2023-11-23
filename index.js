import inquirer from "inquirer";
import { servicioCorreo, verificarCorreo } from "./helpers/correo.js";
import { realizarReserva } from "./helpers/reservas.js";
import "colors";

// Llamamos al servicio de correo
const transporter = servicioCorreo();

// verificarCorreo(transporter); Opción que plantea Nodemailer que me da problemas!!!

//Dejo fuera de la función los console.log para que solo aparezca en la bienvenida

console.log("==========================".magenta);
console.log("  Bienvenido a la app de  ".white);
console.log("    reservas de NODE JS   ".white);
console.log("==========================\n".magenta);

//Función menu bienvenida

const menuPrincipal = async () => {
  let salir = false; // Para el bucle while porque no quiero que salga el programa. Era while(true)!!!

  while (!salir) {
    const bienvenida = await inquirer.prompt([
      {
        type: "list",
        name: "accion",
        message: "Elige una opción",
        choices: ["1. Realizar reserva".magenta, "2. Salir".magenta],
      },
    ]);

    switch (bienvenida.accion) {
      case "1. Realizar reserva".magenta:
        await realizarReserva(); // Llamamos a la primera función
        break;

      case "2. Salir".magenta:
        console.log("¡Gracias por utilizar nuestro servicio!\n".yellow);
        salir = true;
        break;

      default:
        console.log("Elige una opción válida.");
        break;
    }
  }
};

menuPrincipal();
