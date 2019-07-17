const express = require('express');
const app = express();

const morgan = require('morgan');

//configuraciones
const PORT_DEFAULT = 3000; //puerto por default 
app.set('port', process.env.PORT || PORT_DEFAULT); //puerto default o el disponible
app.use(express.urlencoded({extended: false})) //preparar para recibir form html
app.set('json spaces', 2); //indentar formato json 

const RUTA_DEFAULT = '/api/';

app.use(morgan('dev')); //ejecuar en desarrollo para cada cambio 
app.use(express.json()); //preparar la app para uso de json 

//router 
app.use(RUTA_DEFAULT , require('./routes/index.js')); //principal 

app.use(RUTA_DEFAULT + 'libros' , require('./routes/libros.js')); //api de libros 


app.listen(app.get('port'), () => {
  console.log('Servidor en el puerto ' + app.get('port'));
});
