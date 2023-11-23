import nodemailer from "nodemailer";
import "dotenv/config";

// Función para configurar el transporte de correo
const servicioCorreo = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });
};

// Función para verificar errores en la configuración del correo
const verificarCorreo = async (transporter) => {
  try {
    await transporter.verify();
    //console.log("¡Nodemailer listo para enviar correos!");
  } catch (error) {
    console.log("Error al verificar el correo:", error);
    throw error;
  }
};

// Función para enviar el correo
const enviarCorreo = async (destinatario, datosUsuario, cantidadPlazas) => {
  const transporter = servicioCorreo();

  const contenidoCorreo = {
    from: process.env.MAIL_USERNAME,
    to: destinatario,
    subject: "Datos de la Reserva",
    text: `¡Hola ${datosUsuario.nombre} ${datosUsuario.apellido1} ${datosUsuario.apellido2}!\n\nAquí están los datos de tu reserva:\n\nPlazas reservadas: ${cantidadPlazas}\n\nGracias por reservar con nosotros.`,
  };


  try {
    await transporter.sendMail(contenidoCorreo);
    console.log("Correo de confirmación enviado con éxito.");
  } catch (error) {
    console.log("Error al enviar el correo de confirmación:", error);
  }
  
};

export { servicioCorreo, verificarCorreo, enviarCorreo };
