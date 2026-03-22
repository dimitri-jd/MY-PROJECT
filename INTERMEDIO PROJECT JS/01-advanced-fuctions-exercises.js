//! 8- impelementa un ejemplo que haga uso de spred
function multiplica( ...numbers){
    result=1
    for (let number of numbers){
        result *= number
    }
    return result
}

console.log(multiplica(4,4))


//! 2- implemete una fucncion currificada que multiplique 3 numeros 
//! 1- crea una funcion que retorne otra funcion
function currificada(a){
    return function(b){
        return function(c){
            return multiplica(a,b,c)
        }
    }
}


const num1= currificada (5)
const num1y2= currificada(2)(3)
console.log(num1y2(9))
console.log(num1(4)(3))
console.log(currificada(2)(3)(4))


//! 3 desarrolla una funcion recursiva que calcule la potencia de un numero elevado aun exponete
function potencia(num, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return num * potencia(num, exponente - 1);
}

console.log(potencia(2, 4))


//! 4- Crea una fuction createCounter() que reciba un valor inicial y retorne un objeto para increment (), decrement() y getvalue ustilizando ..etc
function createCounter (value){
    return{
    increment: function(){
        value++
    },
    decrement: function(){
        value--
    },
    getValue: function(){
        return value
    }
    }
}
const counter1 = createCounter(5)

counter1.increment()
counter1.decrement()
counter1.increment()
counter1.increment()    
console.log(counter1.getValue())

//! 5

function sumManyTimes(multiplier, ...numbers){
    let result = 0
    for (let num of numbers){
        result += num
    }
    return result * multiplier

}

console.log(sumManyTimes(2,2,2,2))

// !8

function sum (callback, ...numbers){
    let result=0
    for (let num of numbers){
        result += num
    }
    callback(result)
}



function showResult (result){
    console.log(`El resultado es: ${result}`)
}

sum(showResult, 2, 2, 2)


//!7 

function parcialMulti (a){
    return function(b,c){
        return multiplica(a,b,c)
    }
}


const multiNum = parcialMulti(2)
console.log(multiNum(3,4))
console.log(parcialMulti(3)(4,5))


//!10

const personal = {
    name: "dimitri",
    age: 20,
    game: "cyberpunk",
    details: function(){
        console.log(`el perfil de ususario es nombre: ${this.name}, edad: ${this.age}, juego: ${this.game}`)
    }
}

personal.details()

//! 9

const divide = (a,b)=> a / b

console.log(divide(10,2))