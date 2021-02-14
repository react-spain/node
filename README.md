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
