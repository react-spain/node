const express = require('express')
const app = express()
const port = 8080;

// Servir contenido estatico
app.use( express.static('public'));


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


/*
<nav id="menu">
				<ul class="links">
					<li><a href="/">Home</a></li>
					<li><a href="/generic">Generic</a></li>
					<li><a href="/elements">Elements</a></li>
				</ul>
			</nav>
*/
