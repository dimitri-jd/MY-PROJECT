// strings

//concatenacion 


let myNanme = "brais"
let greeting = " hola," + myNanme +"!"

console.log( greeting)
console.log (typeof greeting)


//longitud

console.log (greeting.length)

//acceso de caracteres
console.log(greeting[3])
console.log(greeting[7])


//metodos comunes
console.log (greeting.toUpperCase())
console.log (greeting.toLowerCase())
console.log (greeting.indexOf("hola"))
console.log (greeting.includes("hola"))
console.log (greeting.slice(0,10))
console.log (greeting.replace("brais","juan"))
console.log (greeting.length)


//template litearals ( plantilllas literales )



let message = `este es mi curso
de java
script`


console.log ( message)

let email= "juandavidescobar@gmail.com"


console.log (`hola, ${myNanme}!  tu email es ${email}`)





