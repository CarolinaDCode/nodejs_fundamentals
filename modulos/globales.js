/**
 * Una de las funciones muy usadas en Node es setInterval, clearInterval,
 * para evaluar en n tiempo si el servidor está caído o no.
 * TIP: Si no tengo que usar variables globales no usarlas, pues son un foco de problemas
 */
//Investigar: Concepto de Dependencias Circulares
//console.log(global);
/**
let i = 0
let intervalo = setInterval(function(){
    console.log('Hola')
    if(i === 3){
        clearInterval(intervalo);
    }
    i++;

}, 1000)
 */
/**
setImmediate(function(){
    console.log('Hola');
})*/
//console.log(process)
//console.log(__dirname)
//console.log(__filename)
global.miVariable = 'elValor'

console.log(miVariable)