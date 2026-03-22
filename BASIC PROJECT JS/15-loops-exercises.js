//1.crea un bucle qeu imprima los numeros del 1 al 20
for ( let num=1; num<=20; num++){
    console.log(num)
}


//2- crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado

let suma=0


for(let  N=1 ;N<=100; N++) {

   suma= suma+N
}

console.log(suma)

 
// crea un bucle que imprima todos los nusmeros pares entre 1 y 50



for ( let number =1 ;number<=50; number++ ){
    if( number % 2===0)


    console.log (number)
}



for (let i = 2; i <= 50; i += 2) {
  // Mostrar el número directamente
}



//dado un array de nombres , usa un bucle para imprimir cada nombre en consola


let names = [ "juan", "david", "luis", "pablo", "steven", "daniel", "kiko"]


for (let x = 0; x< names.length; x++ ){

    console.log(`nombres: ${names[x]}`)
}



for (let valor of names){
    console.log( valor)
}
    

// escribe un bucle que cuente el numero de vocales en una cadena de texto


let vocales =[ "a","e","i","o","u",]
let texto= "juan david"
let contador=0

for (let i= 0; i<texto.length;i++){


let letra = texto[i].toLowerCase()

    if(vocales.includes(letra))
        contador++
     console.log(`letra encontrada: ${letra}`)
      
}

console.log(`numero de vocales ${contador} `)



//dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el resultado



let numeros= [2,9,4,]

let resultado= 1


for ( let y=0 ;y<numeros.length; y++){

resultado=numeros[y]*resultado

console.log(`multiplicado por: ${numeros[y]}`)
}
console.log(`el resultado es: ${resultado}`)




let num2=[ 2,4,7]
 
let resultado2=1

for( let num3 of num2){
    resultado2=num3* resultado2
}

console.log( `resultado es : ${resultado2}`)



// escribe un bucle qeu imprima la tabla de multipicar del  5


let num5= 5

for (let m=1; m <=10; m++ ){

 

console.log(`${num5} x ${m} = ${num5*m}`)
}


//usa un bucle para invertir una cadena de texto


let tex= "juan david"

let invertido=""
for( let t=tex.length-1;t>-1; t--){
 
invertido += tex[t]

}

console.log(invertido)



// usa un bucle para generar los primeros 10 numeros de la secuencia de fiborachi



let a= 0
let b= 1

for( let numf=0 ; numf<10; numf++){
    
console.log(`a=${a}, b=${b} resultado :${a+b}`)

 let next= a+b
a=b
b=next
}

//dado un array de numros , usa un bucle para crear un nuevo array que contenga solo los nuemros mayores a 10










