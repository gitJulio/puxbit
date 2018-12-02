require('../config/config')
const conexion = require('../config/pg_connection');
const express = require('express')
const app = express()

/*///////////GET/////////////*/
app.get('/alumno', function (req, res) {
  res.send('Get Alumno')
})

///////////////POST//////////////////
app.post('/alumnos', function (req, res) {
  let body=req.body;
  conexion.query('SELECT * FROM alumnos')
      .then(response => {
       // this.respuesta=response.rows;
       // console.log(response.rows);

       res.status(200).json(response.rows);
      })
      .catch(err => {
          client.end()
      })

  // res.send(body)
//   if (body.nombre===undefined) {
//     res.status(400).json({
//       ok:false,
//       mensaje:'El nombre es necesario'
//     })
//   }else{
//     res.json({persona:body
//   })
// }
})

app.put('/alumno', function (req, res) {
  res.send('Get Alumno')
})

app.delete('/alumno', function (req, res) {
  res.send('Get Alumno')
})

module.exports=app;
