import fs from 'fs';

const escribirHistorial = (datosUsuario, email, cantidadPlazas) => {
  const reserva = {
    nombre: datosUsuario.nombre,
    apellido1: datosUsuario.apellido1,
    apellido2: datosUsuario.apellido2,
    email: email || 'email desconocido',
    plazasReservadas: cantidadPlazas,
    hora: horaReserva(),
  };

  // Obtener el historial actual
  const rutaHistorial = 'historial_reservas.json';

  let historial = [];

  if (fs.existsSync(rutaHistorial)) {
    historial = JSON.parse(fs.readFileSync(rutaHistorial, 'utf-8'));
  }

  // Agregar la nueva reserva al historial
  historial.push(reserva);

 

  // Actualizar el archivo
  fs.writeFileSync(rutaHistorial, JSON.stringify(historial, null, 2));

  // console.log('Puedes consultar la reserva en el historia.\n'.green);
};

export { escribirHistorial };


// Vamos a añadirle la hora de la reserva

const horaReserva = () => {
  const fecha = new Date();
  const dia = fecha.toDateString();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();

  return `${dia} // ${hora}:${minutos}`;
};

// console.log(horaReserva());