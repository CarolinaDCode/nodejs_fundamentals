function hola(nombre, miCallback){
    //console.log('Hello, I`m async function');
        setTimeout(function(){
            console.log('I´m being asynchronous');
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

hola('Diana', function(nombre){
    console.log('Ultimo Proceso')
    console.log('-------')
    adios(nombre, function(){
        console.log('Callbacks in callbacks');
    });
});



console.log('Process Init')
/**adios('Ursula', function(){
    console.log('bye bye')
})*/
console.log('Process final')

//Como la funcion hola tiene un setTimeout que tarda en reproducir un 1s, 
// primero pasa por los console.log y luego al final lo que hay en funcion SoyAscincrona

//Notas
//En JavaScript las funcione son elementos de primer nivel
//Se pueden utilizar de cualquier manera
//El callback puede ser cualquier cosa, pero en este caso será una función

