const express = require('express')
const app = express()
const port = 8080;

// Servir contenido estatico
app.use( express.static('public') );


app.get('/hola-mundo',  (req, res) => {
    res.send('Hola Mundo')
  });


// Servimos
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
  });
   
app.listen(port, ()=>{
    console.clear();
    console.log(('Esta corriendo en el puerto: %s'), port);
})
