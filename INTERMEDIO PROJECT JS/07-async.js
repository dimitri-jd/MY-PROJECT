// programacion asincrona

//  codigo sincrono


console.log(" inicio")

//for(let i=0;i<10000000000;i++){}


console.log(" fin")

// event loop ( bucle de eventos)

//componentes del event loop
//- call stack ( pila de ejecucion )
//- web APIs ( APIS  del navegador ) o Node.js: setTimeout()...
//- task queue(cola de tareas) y microtaskQueue


// flujo del event loop:
//1. call stack
//2. Operecione asincronas ( web APIs o Node.js)
//3. operacion termina -> la coloca en task queue o microtask queue
//4.  si call stack vacio -> mueneve tareas del microtask queue o task queue al call stack 
//5. el proceso se repite 

// codigo asincrono 

console.log("inicio")

setTimeout(()=>{
    console.log(" Esto se ejecuta depues de 2 segundos")
}, 2000)

console.log( " fin ")

//- problema : callback hell

function step1(callback){ 
    setTimeout(()=>{
        console.log("paso 1 completado ")
        callback()
    }, 1000)
}
function step2(callback){ 
    setTimeout(()=>{
        console.log("paso 2 completado ")
        callback()
    }, 1000)
}
function step3(callback){ 
    setTimeout(()=>{
        console.log("paso 3 completado ")
        callback()
    }, 1000)
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log(" todos los pasos completados")
        })
    })
})


// - Promesas

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = false
        if (ok){
            resolve(" Operacion exsitosa")
        }else{
            reject(" se ha producido un error")
        }
},5000)
})

promise // 
    .then(result => {
    console.log(result)
    })
    .catch(error => {
    console.log(error)
    })


// - Encadenamiento de promesas


function step1promise(){ 
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(" paso 1 con promesa completado")
            resolve()
        },1000)
    })
}
function step2promise(){ 
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(" paso 2 con promesa completado")
            resolve()
        },1000)
    })
}


function step3promise(){ 
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(" paso 3 con promesa completado")
            resolve()
        },1000)
    })
}


step1promise()
.then(step2promise)
.then(step3promise)
.then(()=>{
    console.log(" todos los pasos  con promesas completados")
})


// - async / await 

function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms) )
}


async function process (){

    console.log(" inicio del proceso")

    await wait(5000)
    console.log(" proceso depues de 5 segundos ")

    await wait(1000)
    console.log(" proceso depues de 1 segundo ")

    await wait(2000)
    console.log(" proceso depues de 2 segundos ")

    console.log(" fin del proceso")
}

process()