var express = require('express')
var app = express()

app.get('/', function (req, res) {
  // res.send('Hello World')
  let salida={
    nombre:"Julio",
    apellido:"Bueso",
    edad:30,
    url:"/"
  }
  res.send(salida)
})

app.get('/data', function (req,res){
  res.send("Hola Data")
});

app.listen(3000, ()=>{
  console.log("Escuchando peticiones en el puerto 3000");
})
