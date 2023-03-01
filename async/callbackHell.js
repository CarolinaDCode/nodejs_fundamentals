function hola(nombre, miCallback){
    //console.log('Hello, I`m async function');
        setTimeout(function(){
            console.log('Hola, ' + nombre);
            miCallback(nombre);
        },2000)
        //El SetTimeout, tiene un callback
}

function adios(nombre, otroCallBack){
    setTimeout(function(){
        console.log('Adios ', nombre);
        otroCallBack();
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log("Bla bla bla bla");
        callbackHablar()
    }, 1000)
}
// CallBackHell:
/** 
console.log('Process Init')
hola('Diana', function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function(){
                    console.log('Proceso Finalizado');
                });
            })
        })
    })
});
*/
/**
console.log("Iniciando Proceso");
hola('Carlos', function(nombre){
    adios(nombre, function(){
        console.log("Fin")
    });
});
*/
//Funciones Intermedias
function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    }else{
        adios(nombre, callback)
    }
}

console.log("Iniciando Proceso");
hola('Briana', function(nombre){
    conversacion(nombre, 3, function(){
        console.log("Proceso Finalizado");
    });
});



//Notas
/**
 * Las funciones siempre se definen al principio
 */
