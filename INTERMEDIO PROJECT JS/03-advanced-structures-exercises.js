// ! 1 

let numbers = [1,2,3,4,5,6,7,8,9,10]

let sum1 = numbers.map(num =>num+2)
console.log(sum1)

let impares = sum1.filter(num=> num % 2 !==0)
console.log(impares)


let multiplicacion = impares.reduce((result, current) =>  result * current)
console.log(multiplicacion)

// ! 2

let elevcubo = numbers.map(num =>num**3).filter(num=> num % 2 ===0)
console.log(elevcubo)


//! 3
let frase = ["hola",["dimitri","ingresaste",["a","la",["matrix"]]]]

let flat1 = frase.flat(3)

console.log(flat1)
let flatmap = flat1.flatMap(palabra=> palabra.toUpperCase())
let flatmap2 = flat1.flatMap(palabra=> palabra.length)
let flatmap3 = flat1.flatMap(palabra=> palabra.includes("a"))
let flatmap4 = flat1.flatMap(palabra=> palabra.startsWith("a"))
let flatmap5 = flat1.flatMap(palabra=> palabra.endsWith("a"))
let flatmap6 = flat1.flatMap(palabra=> palabra.repeat(2))
let flatmap7 = flat1.flatMap(palabra=> palabra. split("").reverse().join(""))
let flatmap8 = flat1.flatMap(palabra=> palabra. charAt(0))
let flatmap9 = flat1.flatMap(palabra=> palabra. charAt(palabra.length -1))


console.log(flatmap)
console.log(flatmap2)
console.log(flatmap3)
console.log(flatmap4)
console.log(flatmap5)
console.log(flatmap6)
console.log(flatmap7)
console.log(flatmap8)
console.log(flatmap9)

// ! 4


let array =[ 23,65,8,2,8,2,0,5,3,8,4,23,54,67]

let ordenado = array.sort((a,b)=>a-b)
console.log(ordenado)


// ! 5 & 6

let set1= new Set([1,2,3,4,5,"hola",true, false,7])
let set2= new Set([4,5,6,7,8,"adios",true, null,9])

let union = new Set([...set1, ...set2])
union.forEach(element => console.log(element))

let interseccion = new Set([...set1].filter(element=> set2.has(element)))
interseccion.forEach(element => console.log(element))

let diferencia = new Set([...set1].filter(element=> !set2.has (element)))
diferencia.forEach(element => console.log(element))


// ! 7

let informacion =[
    {name: "dimitri", age: 30, email:"dimitri@example.com"},
    {name: "alex", age: 25, email:"alex@example.com"},
    {name: "maria", age: 28, email:"maria@example.com"},
    {name: "john", age: 17, email:"john@example.com"}
]

informacion.forEach(persona=>{
    console.log(`name: ${persona.name}, age: ${persona.age}, email: ${persona.email}`)
})

// ! 8
let names = informacion.map(persona =>persona.name)
console.log(names)


// ! 9

let emailAdult = informacion.filter(persona=> persona.age >=18).map(persona=> persona.email)
console.log(emailAdult)

let setEmail = new Set(emailAdult)
console.log(setEmail)

// ! 10

let mapInformation = new Map(informacion.map(persona => [persona.email,  {name: persona.name, age: persona.age}]))
console.log(mapInformation)
mapInformation.forEach((value, key)=> console.log(`${key}: ${JSON.stringify(value)}`))