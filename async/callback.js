function soyAsincrona(){
    //console.log('Hello, I`m async function');
        setTimeout(function(){
            console.log('I´m being asynchronous')
        },1000)
}

console.log('Process Init')
soyAsincrona();
console.log('Process final')