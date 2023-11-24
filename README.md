# RESERVAPP

# Descripción de la aplicación

Reservapp es un proyecto de aprendizaje sobre Node JS que permite reservar localidades para eventos desde una terminal. La aplicación permite determinar la cantidad de plazas de un evento para que los usuarios la vayan reservando. Al ser un proyecto de aprendizaje tiene una lógica de funcionamiento muy sencilla, funciona sin necesidad de registro previo pero sí ofrece al final del proceso la posiblidad de que el usuario reciba una confirmación por mail.

# Instalacion

Clona el repositorio desde GitHub git clone https://github.com/JuanjoTudela/reservapp
Desde NPM: npm install 
Instala las dependencias: npm install

# Uso

Ejecuta en la terminal:

Sale el menú de bienvenida y el proceso es totalmente guiado al cumplimentar los campos que requiere el programa.

# Dependencias

Inquirer: Para crear cuestionarios en la terminal.
Colors: Para dale vida y color a nuestra terminal.
Nodemailer: Para poder realizar el envío de correos de confirmación

# Configuración

Necesitas contar con una cuenta en Google Cloud para poder obtener los códigos de autenticación que te permitan utilizar la API de gmail.

# Arquitectura del proyecto

index.js es la entrada a nuestra aplicación. En helpers encontrarás los archivos reservas.js donde se define la función principal de la aplicación, y en funciones.js las funciones secundarias que la hacen funcionar. El proyecto se completa con correo.js donde se define toda la llamada a Nodemailer y el módulo historial.js que define la escritura del archivo historias_reserva.json que ofrece al administrador la información de las reservas realizadas.

Contribuciones

¡Contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias, por favor crea un issue o envía un pull request.

Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

