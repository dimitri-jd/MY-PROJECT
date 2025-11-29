//funciones

//simple
function myFunc(){

console.log("hola , funcion")

}


for(let i=0; i<=5;i++){
myFunc()

}

//con parametros


function myFuncWithParams(name){

console.log(`hola, ${name}`)

}
myFuncWithParams("juan")
myFuncWithParams("david")



//funciones anonimas


const myFunc2 = function(name){
    console.log (`hola, ${name}`)
}


myFunc2("juan david")


//arrow functions


const myFunc3 = (name)=>{
    console.log (`hola, ${name}`)
}
myFunc3( "escobar")




const myFunc4 = (name)=> console.log (`hola, ${name}`)
   
myFunc4("zuñiga")


//paramertos

function sum (a,b){
    console.log(a +b)
}
sum( 4,9)

sum()


function defaultSum (a=0,b=0){
    console.log(a +b)
}
//pro defecto
defaultSum()
defaultSum(5)
defaultSum(9,6)
defaultSum(b=5)



//retorno de valores

function mult (a,b){
    return a*b
}


console.log(mult(5,10))



let result = mult (5,10)
console.log( result)



//FUNCIONES ANIDADAS


function extern(){
     console.log( "fucnion externa")
    function intern(){
        console.log( "fucnion interna")
    }
    intern()
}


extern()
// interm() Error: fuera del scope



//funciones de orden superior


function applyFunc(func,param){
func(param)
}

applyFunc(myFunc4," funcion de orden superior")



//forEach

myArray= [1,2,3,4]


myArray.forEach(function(value){
    console.log(value)
})


myArray.forEach((value)=>console.log(value))




myset= new Set(["juan","david","escobar",false,1, "juandavidescobarQgmail.com"])

myMap= new Map([
    ["name","juan"],
    ["email","juandavidescobar@1283"],
    ["age",19]
])


myset.forEach((value)=>console.log(value))


myMap.forEach((value)=>console.log(value))