const express = require('express');
const app = express();
const path = require('path'); // me permite trabajar con las carpetas de mi directorio, para saber donde esta una carpeta o archivo

app.use(express.urlencoded({ extended: false })); // la funcion urlencoded lo que me permite es que express entienda los datos del formulario que envio por post y los convierta en un object
app.use(express.json()); // esta conf permite que el servidor tambien reciba datos en formato JSON

app.use(require('./routes/index')); // estoy trayendo las rutas declaradas

app.use(express.static(path.join(__dirname, 'public'))); // dirname es una funcion de node que me arroja el lugar donde se encuentra una carpte dentro del directorio raiz del proyecto, en este caso establecere una carpeta como publica para acceder a los elementos de ella

const port = 3000;
app.listen(port, () => {
	console.log('server in http://localhost:' + port);
});
