/**
 * Console:
 * Con console podemos imprimir todo tipo de valores por
 * nuestra terminal.
 * 
 * console.log: recibe cualquier tipo y lo muestra en el consola.
 * console.info: es equivalente a log pero es usado para informar.
 * console.error: es equivalente a log pero es usado para errores.
 * console.warn: es equivalente a log pero es usado para warning.
 * console.table: muestra una tabla a partir de un objeto.
 * console.count: inicia un contador autoincremental.
 * console.countReset: reinicia el contador a 0.
 * console.time: inicia un cronometro en ms.
 * console.timeEnd: Finaliza el cronometro.
 * console.group: permite agrupar errores mediante identación.
 * console.groupEnd: finaliza la agrupación.
 * console.clear: Limpia la consola.
 */
/*
var tabla =[
    {
        a: 1,
        b: '>'
    },
    {
        a: 2,
        b: 'Otra'
    }
]
console.table(tabla)
*/
/**
console.group('Conversacion');
console.log('Hola');
console.log('Blaablaaa');
console.group('SubConversacion');
console.log('Hola');
console.log('Blaablaaa');
console.log('bye bye')
console.groupEnd('FinSubSubConversacion');
console.log('bye bye')
console.groupEnd('Conversacion');

console.log('Siguiente Grupo')
 */
/**
function function1(){
    console.group('funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien (1)');
    console.log('Esto tambien (1)');
    function2();
    console.log('He vuelto a la 1')
    console.groupEnd('funcion 1')
}

function function2(){
    console.group('funcion 2');
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('funcion 2')
}

console.log('empezamos')
function1();
 */

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');