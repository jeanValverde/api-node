const express = require('express');
const app = express();

const morgan = require('morgan');

//setting 
const PORT_DEFAULT = 3000; //port default  
app.set('port', process.env.PORT || PORT_DEFAULT); //port default o el enable 
app.use(express.urlencoded({extended: false})) //pull apart for get form html
app.set('json spaces', 2); //formatter json 

//constants 
const ROUTE_DEFAULT = '/api/';

app.use(morgan('dev')); //run develop 

app.use(express.json()); //prepare app for json 

//router 
app.use('/', require('./routes/index.js')); //main 

app.use(ROUTE_DEFAULT + 'books' , require('./routes/books.js')); //api books 


app.listen(app.get('port'), () => {
  console.log('Server on port ' + app.get('port'));
});
