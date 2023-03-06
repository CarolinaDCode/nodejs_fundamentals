async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola ' + nombre);
            resolve(nombre);
        },2000)
    })
}

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    })

}

async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Bla bla bla bla");
            // resolve(nombre)
            resolve('Hay un errorrrr!')
        }, 1000)
    })
}

//----
async function main(){
    let nombre = await hola('Diana');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre)
    console.log('Termina el proceso');
}

console.log('Empezamos el proceso');
main();
console.log('2da Instruccion');
