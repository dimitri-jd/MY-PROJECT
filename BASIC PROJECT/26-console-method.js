//CONSOLE

//LOG

console.log("hola")

//ERROR

console.error("este es un mensaje de error")
console.error("error al concectase a la base de datos", new Error("conexion fallida"))

//warn

console.warn(" este es un mensaje de advertencia")

//info

console.info("este es un mensaje de informacion adicional")

//table


let data=[
    ["brais",37],
    ["sara",21]
]
console.table(data)


 data=[
    {name:"brais",age:37},
    {name:"sara",age:21}
]

console.table(data)

//group

console.group("Usuario:")
console.group("Nombre :Dimitri")
console.group("Edad: 19")
console.groupEnd()



//time
console.time("tiempo de ejecucion1")

for(let i=0; i<10000;i++){
    
}
console.time("tiempo de ejecucion2")
for(let i=0; i<10000;i++){
    
}

console.timeEnd("tiempo de ejecucion1")

for(let i=0; i<10000;i++){
    
}

console.timeEnd("tiempo de ejecucion2")

//assert

let age=17
console.assert(age>=18,"El usuario debe ser mayor de edad")



//count
console.count("click")
console.count("click")
console.count("click")
console.countReset("click")
console.count("click")

//trace

function funcA(){

}

function funB(){

}
console.trace("seguimiento de la ejecucion")

funcA()

//clear 

//console.clear()