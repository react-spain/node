var colors = require('colors');
const express = require('express')
const app = express()
const port = 8080;
 
app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/hola',  (req, res) => {
    res.send('Hola')
  });


app.get('*', (req, res) => {
    res.send('404 | Page not Found');
    console.log('No se encuentra la pagina'.red)
  });
   
app.listen(port, ()=>{
    console.clear();
    console.log(colors.yellow('Esta corriendo en el puerto: %s'), `${port}`.red);
})
