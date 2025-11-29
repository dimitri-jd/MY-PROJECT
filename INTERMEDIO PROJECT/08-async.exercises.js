//! 1

function saludar ( name, callback){
    setTimeout(() => {
        console.log(`Hola ${name}`)
        callback()
    }, 1000)
}


saludar("Juan", ()=>{})


//!2  

function task1(callback){
    setTimeout(() => {
        console.log(" 1 seg completado")
        callback()
    }, 1000)
}


function task2(callback){
    setTimeout(() => {
        console.log(" 1 seg completado")
        callback()
    }, 1000)
}


function task3(callback){
    setTimeout(() => {
        console.log(" 1 seg completado")
        callback()
    }, 1000)
}


task1(()=>{
    task2(()=>{
        task3(()=>{
            console.log("Todas las tareas completadas")
        })
    })
})


//! 3

function verifyNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ( num %2=== 0 ){
                resolve(`el numero ${num} es par`)
            } else {
                reject(`el numero ${num} es impar`)
            }
        }, 5000);
    });
}

verifyNumber(7)
.then((message) => {
    console.log(message)
})
.catch((error) => {
    console.log(error)
})



//! 4




function firstTask(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(" primer tarea completada")
            resolve()
        }, 1000)
    })
}

function secondTask(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(" segunda tarea completada")
            resolve()
        }, 2000)
    })
}


function thirdTask(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(" tercera tarea completada")
            resolve()
        }, 1500)
    })
}

firstTask()
.then(secondTask)
.then(thirdTask)
.then (()=>{
    console.log(" todas las tareas completadas")
})


//! 5

async function executeTasks(){
    await firstTask()
    await secondTask()
    await thirdTask()
    console.log(" todas las tareas completadas - async/await")
}
executeTasks()



//! 6

function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (id < 5){
                resolve({id: id, name: "Usuario"+ id})
            } else if (id >=5){
                reject("Usuario no encontrado")
            }

        },2000)
    })
}


async function getUserAsync(id){
    try {
        const user = await getUser(id)
        console.log("Usuario encontrado:", user)
    } catch (error){
        console.log("Error:", error)
    }
}

getUserAsync(3)



//! 7

console.log("inicio")
setTimeout(()=> console.log(" setTimeout ejecutado"), 0)
Promise.resolve().then(()=> console.log(" promesa resuelta"))
console.log("fin")



//! 8


function promesa1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(" promesa 1 completada")
            resolve()
        },3000)
    })
}


function promesa2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(" promesa 2 completada")
            resolve()
        },1000)
    })
}


function promesa3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(" promesa 3 completada")
            resolve()
        },2000)
    })
}

Promise.all([promesa1(),promesa2(),promesa3()])
.then(()=>{
    console.log("Todas las promesas completadas")
})
.catch((error)=>{
    console.log("Error en alguna de las promesas:", error)
})


//! 9

function esperarSegundos(ms){
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve()
        }, ms)
    })
}

async function procesoEspera(){
    console.log("Inicio del proceso de espera")
    await esperarSegundos (3000)
    console.log("Esperado 3 segundos")
    await esperarSegundos (2000)
    console.log("Esperado 2 segundos")
    await esperarSegundos (1000)
    console.log("Esperado 1 segundo")
    await esperarSegundos (5000)
    console.log("Fin del proceso de espera")
}

procesoEspera()


//! 10


let balance = 500


function checkBalance(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(` Saldo diponible:  ${balance}$`)
            resolve()
        }, 1000)
    })
}

function withdrawMoney(amount){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if ( amount <= balance){
                console.log(` Retirando ${amount}$`)
                resolve(`Operacion exitosa, saldo restante ${balance -= amount}$`)
            } else {
                reject("Fondos insuficientes")
            }
        }, 2000);
    })
}


async function bankingProcess(amount){
    try {
        await checkBalance()
        const message = await withdrawMoney(amount)
        console.log(message)
    } catch (error){
        console.log("Error en la transaccion:" + error)
    }}


bankingProcess(300)
.then(() => bankingProcess(300))
.then(() => bankingProcess(100))

