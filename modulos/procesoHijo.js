/**
El módulo de procesos secundarios de Node.js (child_process)
tiene dos funciones spawn y exec, mediante las cuales podemos
iniciar un proceso secundario para ejecutar otros programas
en el sistema.

La diferencia más significativa entre child_process.spawn y
child_process.exec está en lo que spawn devuelve un stream y
exec devuelve un buffer.

Usa spawn cuando quieras que el proceso hijo devuelva datos binarios
enormes a Node.
Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado
simples.
Usa spawn cuando quieras recibir datos desde que el proceso arranca.
Usa exec cuando solo quieras recibir datos al final de la ejecución.
Un buen blog para revisar mas del tema:
*/

const { exec, spawn } = require('child_process');
//Procesos por debajo
/**
exec('node consola.js', (err, stdout, sterr) =>{
    if(err){
        console.log(err);
        return false;
    }

    console.log(stdout);
}) */

let proceso = spawn('ls', ['-la']);

//console.log(proceso.pid);
//console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log('¿Proceso esta muerto?')
    console.log(process.killed)
    console.log(dato.toString())
})

proceso.on('exit', function(){
    console.log('El proceso termino')
    console.log(process.killed)
})


//FALTA --