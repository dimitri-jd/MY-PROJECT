//operadores

//operadores aritmeticos

let a= 10
let b= 10

console.log (a+b) //suma
console.log (a-b)//resta
console.log (a*b)//multiplicacion
console.log (a/b)// division


console.log (a%b) // modulo
console.log (a**b)// exponente

//a++
//console.log(a)// incremento

//b--
//console.log (b)//decremento


//operdaores de asignacion

let myVariable = 4
console.log (myVariable)
myVariable += 2
console.log(myVariable)
myVariable -= 2
myVariable*= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2


//operadores de comparacion

console.log( a<b)
console.log(a>b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)

console.log(a==6) //igualdad por valor
console.log(a=="6")//igualdad por valor 
console.log(a==a)
console.log(a===b) //igualdad por identidad(por tipo y valor)
console.log(a===6)
console.log(a==="6")
console.log(a!=6)
console.log(a!== "6")



//truthy calues(valores verdaderos)


//todos los numeros positivos y negativos menos el cero
//todas las cadenas de texto menos la vacias
//todos los boolean

//fasly values ( valores falsos)
// 0
//0n
//null
//undefined
//NaN
//boolean dalse
// cadenas de texto vacias





//operadores logicos


//and (&&)

console.log( 5>10 && 15>20 )
console.log( 5<10 && 15<20 )
console.log( 5<10 && 15>20 )
console.log( 5>10 && 15>20 && 30>40 )


//or

console.log( 5>10 || 15>20 )
console.log( 5<10 || 15<20 )
console.log( 5<10 || 15>20 )
console.log( 5>10 || 15>20 || 30>40 )

console.log( 5>10 && 15>20 || 30<40 )



//not (!)

console.log (!true)
console.log(!false)
console.log( !(5>10 && 15>20 ))
console.log( !(5>10 || 15>20 ))




//operadores ternarios


const isRaining = false


isRaining ? console.log ("esta lloviendo") : console.log("no esta lloviendo")







