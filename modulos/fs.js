const fs = require('fs');
/**
 * filesystem: permite acceder a archivos de nuestro sistema,
 * acceder a archivos, escribirlos, leerlos, modificarlos.
 * Es muy útil cuando se empieza a trabajar
 * con precompiladores, cosas para hacer grabado de disco.
 * 
 * 
 */

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) =>{
        //Leido
        //.toString() => convierte los buffer en string
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.error('No se pudo escribir', err);
        }else{
            console.log('Se ha escrito correctamente');
            console.log(contenido);
        }
    });
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb);
}


//leer(__dirname + '/archivo.txt', console.log);
//escribir(__dirname + '/archivo2.txt', 'Archivo text ...', console.log);
//borrar(__dirname + '/archivo2.txt', console.log)