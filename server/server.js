require('./config/config')
const conexion = require('./config/pg_connection');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

////////LLAMAMOS LA RUTA //////////
app.use(require('./routes/alumno'));

  app.get('/',  (req, res) =>{
    var respuesta = [];


  })


app.listen(process.env.PORT,()=>{
  console.log("Escuchando puerto");
});
