const express = require('express');
const app = express();



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


//Middlewares
app.use(express.static('public'));


//Rutas
const main = require ('./routes/main');


app.use('/', main)




//Inicializacion del servidor
app.listen(3000, ()=> {
    console.log("Server 3000 running");
});

