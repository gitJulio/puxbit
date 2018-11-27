require('./server/config');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use(express.static( __dirname+'../public'));


app.get('/usuario/:id', function (req,res){

  let id=req.params.id;
  res.json({id})
});

app.listen(process.env.PORT , ()=>{
  console.log("Escuchando peticiones en el puerto 3000");
})
