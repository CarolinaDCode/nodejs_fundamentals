//PROMESAS
/**
 * Es una nueva forma de trabajar con asincronia.
 * las promesas cuentan con 3 estados, resuelta, en progreso y en fallo.
 * Para utilizar una promesa solo debemos de instanciar una nueva, una promesa en si es una función que recibe dos parámetros, resolve y * reject, que son los dos estados de una promesa.
 * Utilizamos resolve para retornar el valor deseado cuando una función se ejecute y utilizamos reject para cuando una función retorna un * valor no deseado.
 * New Promise( (resolve, reject) => {
 * …code
 * If(code === true){
 * resolve(correctValue);
 * }else {
 * Reject(wrongValue);
 * }
 * });
 */
function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola ' + nombre);
            resolve(nombre);
        },2000)
    })
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios ', nombre);
            resolve();
        }, 1000);
    })

}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Bla bla bla bla");
            // resolve(nombre)
            reject('Hay un errorrrr!')
        }, 1000)
    })
}

//----
// Siempre despues de un then un catch
console.log('Iniciando el proceso ...');
hola('Carlos')
    //.then(nombre => { return adios(nombre); })
    .then(hablar) 
    .then(hablar) 
    .then(hablar)  
    .then(adios) /**Solo cuando el parametro es el mismo*/
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error =>{
        console.error('Ha habido un error: ');
        console.error(error);
    })