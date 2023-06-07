const http = require('http');         
const cors = require('cors');         
const morgan = require('morgan');     
const express = require('express');   
const server = express(); //hacemos el server con express asi de facil en 1 linea 
const PORT = 3001; // creamos el puerto
const {router} = require("./routes/index.js");

server.use(morgan("dev")) //muestra en la consola todo los cambios en el servidor 
server.use(express.json());  //es para que el server lea json
server.use(cors()); //middleware genericos para dar permisos a quien puede acceder al servidor
server.use('/rickandmorty', router); //ruta inicial del servidor

// server.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Credentials', 'true');
//    res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'          //middleware personalizados
//    );
//    res.header(
//       'Access-Control-Allow-Methods',
//       'GET, POST, OPTIONS, PUT, DELETE'
//    );
//    next();
// }); 

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT); //escuchamos el server
});

//UTILS : en la carpeta utils simullamos la base de datos.

//ROUTES : las rutas del servidor.

//CONTROLLERS : controladores como login etc.