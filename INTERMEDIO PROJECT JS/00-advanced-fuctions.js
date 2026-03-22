// funciones avanzadas


//ciudadanos de primera clase


const greet = function (name){
    console.log(`hola,${name}`)
}

greet('juan')

function processGreeting(greetFunction,name){ // la funcion greet se pasa como argumento a otra funcion
    greetFunction(name)
}
processGreeting(greet,'dimitri')

function returnGreeting(name){// la funcion greet se retorna desde otra funcion
    return greet
    
}

const greet2 = returnGreeting()
greet2('ana')


//arrow fuctions avanzadas


//- retorno implicito
const multiplay = (a,b) => a + b
console.log(multiplay(2,5))

//- this lexico

const handler = {
    name: "juan",
    greeting: function() {
        console.log(`hola, ${this.name }`)
},
arrowGreeting: ()=> {
        console.log(`hola, ${this.name }`)
}
}
handler.greeting()

handler.arrowGreeting(); // no funciona porque el this en arrow function no es lexico crea su propio this contexto


// IIFE (expresion de fucion que se invoca inmediatamente)

//- IIFE clasico

(function(){
    console.log("IIFE clasico")
})();

(()=>{
    console.log("IIFE con arrow fuction")
})()



//PARAMETROS REST (...) // permite representar un numero indefinido de argumentos como un array
function sum (...numbers){ 
    let result = 0
    for (let number of numbers){
        result += number
    }
    return result
}

console.log (sum(1,2,3,4,5) )
console.log(sum(10,15))



//operador SPREAD (...) // permite expandir elementos de un array o un objeto

const numbers=[1,2,3,4,5]
function sumWithSpread (a,b,c){
    return a + b + c
}

console.log(sumWithSpread(1,2,3)) // sin spread
console.log(sumWithSpread(...numbers)) //expande el array en elementos individuales


//Closures ((clausuras)) // una funcion que recuerda su contexto lexico

function createCounter(){
    let counter = 0 
    return function(){ 
        counter ++
        console.log(`contador: ${counter}`)
    }
}
const counter = createCounter() 
counter()
counter() 
counter()
counter()

//recursividad // una funcion que se llama a si misma 

function factorial(n){
    if (n<=1){
        return 1
    }
    return n * factorial(n-1)
}

console.log(factorial(5)) 


//funciones parciales  // tecnica de fijar un numero de argumentos de una funcion y generar una nueva funcion
function partialSum (a){
    return function(b,c){
        return sum(a,b,c)
    }
}
const sumWith = partialSum(4) // fija el primer parametro
console.log(sumWith(2,3)) // ahora solo necesita dos parametros
console.log(sumWith(1,2))
console.log(sumWith(10,20))

//currying // tecnica de transformar una funcion con multiples argumentos en una secuencia de funciones que toman un solo argumento

function currySum(a){
    return function(b){
        return function(c){
            return function(d){
                return sum(a,b,c,d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3)) 
console.log(sumC(4))
console.log(sumAB(5)(7))

//callbacks  // una funcion que se pasa como argumento a otra funcion y se ejecuta despues de que la otra funcion ha terminado

function processData(data,callback){
    const result = sum(...data)
    callback(result)
}

function processResult(result){
    console.log(result)
}

function processResult2(result){
    console.log(`mi resultado es ${result}`)
}

processData([1,2,3], processResult)
processData([1,2,3], processResult2)
processData ([1,2,3], (result) => {
    console.log(`mi resultado en la arrow fuction  es: ${result}`)
})
