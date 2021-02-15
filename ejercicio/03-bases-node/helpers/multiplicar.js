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
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    resolve(`tabla-${base}.txt creado`);
    })
}

module.exports = {
    crearArchivo
}