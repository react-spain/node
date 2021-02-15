yargs.js
```
const { options } = require('yargs');
const colors = require('colors');

const argv =  require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .check( (argv, options) => {
                        if (  isNaN( argv.b )  ){
                            throw 'La base tiene que ser un numero'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;
```

app.js
```
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
// const base = 12;
console.log(argv);
console.log('base: yargs', argv.base);

crearArchivo( argv.b, argv.l )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err=>console.log(err));
```

multiplicar.js
```
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = (base = 5, listar) => {
    return new Promise((resolve, reject) =>{

    
    let salida = ''
    for( let i=1; i<=10; i++ ){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
    if (listar){
        console.log('================='.green)
        console.log('Tabla de colores'.blue)
        console.log('================='.green)
        console.log(salida);
        
    }
    
    fs.writeFileSync(`tabla-${base}.txt`,salida);
    resolve(`tabla-${base}.txt creado`);
    })
}

module.exports = {
    crearArchivo
}
```


