// Estructuras  avanzadas


// Arrays avanzados

// - Metodos funcionales

// forEach // itera sobre cada elemento del array y ejecuta una funcion

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element=> console.log(element))


//map  // crea un nuevo array con los resultados de la funcion aplicada a cada elemento

let doubled= numbers.map(element => element * 2 )
console.log(doubled)


// filter  // crea un nuevo array con los elementos que cumplen la condicion

let evens=numbers.filter(element => element % 2 === 0)
console.log(evens)


//reduce  // aplica una funcion acumulativa a los elementos del array

let sum=numbers.reduce((result, current)=> result+current, 0)
console.log(sum)


// - Manipulacion

// flat // crea un nuevo array con los elementos anidados en un solo nivel

let nestedArray =[1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray) 
flatArray = nestedArray.flat(2)
console.log(flatArray) 
flatArray = nestedArray.flat(3)
console.log(flatArray) 


//flatMap  
let phrases= ["hola mundo","adios mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

//-Ordenacion

let unsorted=["b","a","d","c"]
let sorted= unsorted.sort()
console.log(sorted)

unsorted = [3,4,1,6,10]
sorted= unsorted.sort((a, b)=> a-b) // ordena de menor a mayor

console.log(sorted)


// reverse // invierte el orden de los elementos del array

sorted.reverse()
console.log(sorted)

// - Busqueda

//includes

console.log(sorted.includes(4))
console.log(sorted.includes(5))


//find // devuelve el primer elemento que cumple la condicion

let firstEven =sorted.find(element => element % 2 === 0) 
console.log(firstEven)

//findIndex // devuelve el indice del primer elemento que cumple la condicion


let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)


//sets  avanzados

// - Operaciones

//Elimincion de duplicados

let numbersArray= [1,2,2,3,4,5,6,6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

//Union 

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union) 


//Interseccion 

const interseccion =new Set([...setA].filter(element=> setB.has(element) ))
console.log(interseccion)

//Diferencia 

const difference =new Set ([...setA].filter (element => !setB.has(element)))
console.log(difference)

//conversion

console.log(...setA) // convierte el set en un array

// Iteracion

setA.forEach(element => console.log(element))


// Maps avanzados


let myMap = new Map([
    ["name", "dimitri"],
    ["age", 19]
])

myMap.forEach((value, key)=>console.log(`${key}: ${value}`))


// - Conversion

//Mapa a array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)


//Mapa a objeto

const objectFromMap =  Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a mapa

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)
