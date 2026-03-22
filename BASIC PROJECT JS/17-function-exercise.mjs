//crea una funcion que reciba dos numeros y devuelva su suma 


function sum (a,b){
    console.log(a+b)
}
sum( 10,11)


//crea una funcion que reciba un array de numeros y devuelva el mayor de ellos 



let numeros= [ 1,2,3,4,5,6,7,8,9]

let num=0
let mayor=0
function encontrarmayor(numeros){
    for (  mayor of numeros){
        if(mayor>num){

            num=mayor
        } 
        

    }
return num

}

console.log (encontrarmayor(numeros))


//crea un string y devuelva el numero de vocales qeu contiene




export  function numvocales(texto){
    let vocales=["a","e","i","o","u"]
    let contador=0

    for (let i= 0; i<texto.length;i++){

        let letra = texto[i].toLowerCase()
        if (vocales.includes(letra))
            contador++


    }
    return `numero de vovcales:${contador}`
}

console.log(numvocales("juan david escobar zuniga"))



//crea una funcion que reciba un array de strings y devuelva las strings en mayusculas




let resultado= function mayusculas (textom){
    
    let textoM=[]

    for (let mayus of textom){

        let mayuscula=mayus.toUpperCase(textom)
        
        textoM.push(mayuscula)
        
        
    
    }
    

return textoM

}


console.log( resultado(["juan","david","escobar","zuñiga"]))



//crea una funcion que reciba un numero y devuelva "true" si es primo,y false en caso contrario



let resultadoP = function nPrimo (num){

    if(num<=1){
    return  false
    }
    for ( let n=2; n<num ; n++){

        if (num % n === 0){
        return   false
    
        }
    }
return true

}


console.log(resultadoP(9))




//crea una funcion qeu reciba 2 arrays y devuelva un nuevo array que contenga los lementos comunes entre ambos 


function elementosComunes(array1, array2 )  {

        let array3=[]   

        for(let  comun of array1){

        if(array2.includes(comun)){

        array3.push(comun)
        
            }
        }
        
return console.log(array3)


    }  


elementosComunes([1,2,3,7,4,5,6],[1,7,6,4,9,8,0])




//crea una funcion que reciba un array de numeros y devuelva la suma de todos los nuemros pares 


function sumaDePares(arraynum){
let sumaP=0

for(let pares of arraynum){

    if( pares % 2===0){

    sumaP= pares+sumaP

    }


}   
return sumaP
}


console.log(sumaDePares([1,2,3,4,5,6,7,8]))


// crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado



function elevacionalcaudarado (arrayNum){

let arrayC=[]

for( let numC of arrayNum){

    numC= numC**2

    arrayC.push(numC)
}

return arrayC

}


console.log(elevacionalcaudarado([3,2,3,4,5,6,7]))



//crea una funcion que reciba una cadena de texto y devuelva al misma cadena con las palabras en orden inverso




function ordeninverso(texto){
let palabras =texto.split(" ")
let invertido=[]

invertido=palabras.reverse()
    
    

let finish=invertido.join(" ")
return finish

}


console.log( ordeninverso("juan ama programar"))




//crea una funcion que calcule la factorial deun numero 


function factorial(numF){
let prodcuto=1
if ( numF===0){
    return 1
}else if(numF<0){
return null
}
for (let f=1 ; f<=numF; f++){

prodcuto= prodcuto*f
}
return prodcuto

}

console.log(factorial(3))






