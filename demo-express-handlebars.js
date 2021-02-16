const express = require('express')


const app = express()
const port = 8080;

// Handlebars
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'hbs' );

// Servir contenido estatico
app.use( express.static('public'));

app.get('/',  (req, res) => {
  res.render('home',{
    nombre: 'Marlon',
    titulo: 'Curso de Node'
  });
});


app.get('/generic',  (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
  });


  app.get('/elements',  (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
  });

// Servimos
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
  });
   
app.listen(port, ()=>{
    console.clear();
    console.log(('Esta corriendo en el puerto: %s'), port);
})
