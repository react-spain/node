# Hola Mundo
Creamos el package.json
```
npm init
```

```
{
  "name": "03-bases-node",
  "version": "1.0.0",
  "description": "Es una simple tabla de multiplicar",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Marlon Falcon",
  "license": "ISC"
}
```

# Instalar Paquetes
```
node -i colors@1.0.0
node -install colors@1.0.0
```

# Desintalar Paquetes
```
node -i colors@1.0.0
node -uninstall colors@1.0.0
```

# Hola Mundo
```
// Funcion Flecha
const saludar = ( nombre ) => {
    return `Hola Mundo: ${ nombre }`;
}

// Imprimimos en la consola
console.log(saludar('Marlon'));

// node demo.js
```

# Funciones no bloqueantes
```
console.log('Inicio de Programa');

setTimeout( () =>{
    console.log('Primer Timeout')
}, 3000);

setTimeout( () =>{
    console.log('Segundo Timeout')
}, 0);

setTimeout( () =>{
    console.log('Tercer Timeout')
}, 0);

console.log('Fin de Programa');
```

# Hola Mundo Consola
```
console.clear();
console.log('=======================');
console.log('=====  Tabla del 5 ====');
console.log('=======================');
const base = 5;
for( let i=1; i<=10; i++ ){
        console.log(`${base} x ${i} = ${base*i}`);
    }
```

# Escribiendo en un Fichero
```
const fs = require('fs');
console.clear();
const base = 5;
let salida = ''
for( let i=1; i<=10; i++ ){
        salida += `${base} x ${i} = ${base*i}\n`;
    }


fs.writeFile('tabla-5.txt',salida, (err) => {
    if (err) throw err;

    console.log('Archivo creado')
})
```


# Escribiendo en un Fichero con export y uso de promesas
```
// multiplicar.js
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) =>{
    console.log('=================')
    let salida = ''
    for( let i=1; i<=10; i++ ){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`,salida);
    resolve(`tabla-${base}.txt creado`);
    })
}

module.exports = {
    crearArchivo
}
```
```
// app.js
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();
const base = 12;

crearArchivo( base )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err=>console.log(err));

```


```
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();
// const base = 12;

const  [ , , arg3 = 'base=5'] = process.argv
const [ , base = 5] = arg3.split('=');

crearArchivo( base )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err=>console.log(err));
```

# HTTP
```
const http = require('http');

http.createServer( (req, res) => {
    res.write('Hola Mundo');
    res.end();
})
.listen( 8080 )

console.log('Escuchando el puerto, 8080')
```

# JSON
```

const http = require('http');

http.createServer( (req, res) => {
    res.writeHead(200,{  'Content-Type': 'application/json'  })
    
    const persona = {
        id: 1,
        nombre: 'Marlon'
    }

    res.write( JSON.stringify(persona) );
    res.end();
})
.listen( 8080 )

console.log('Escuchando el puerto, 8080')
```
