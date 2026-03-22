//1. captura una exepcion utulizando try - catch


function dividir(a,b){

    if( a<=0 || b<=0){
        throw new Error("Esta opcion solo divide numeros positivos")
    }
    return a / b
}




try {
console.log(dividir(1,2))

}catch(error){

console.log("se ha producido un error:",error.message)

}





let Usuario={
    name: "ana",
        ciudad:"Bogota",
        
    
}



try{
console.log(Usuario.direccion.codigoPostal)

}catch(error){

console.log("Error",error.message)
}


function User (name,age){

    if( name.length<=2){
        throw new TypeError("El nombre es muy corto")
    }if(typeof age !== "number"|| age<=0){
        throw new Error("la edad debe ser mayor a 0")
    }

return { name, age }

}


try{

console.log(User("juan", 8))

}catch(error){
     
if(error instanceof TypeError){
    console.log("se ha producido un error:",error.message)
}else if(error instanceof Error){
console.log("se ha producido un error:",error.message)
}

}

//crea un bucle que intente transformar a float cada valor y capture y muretre los errores


let diferentvalues=[23,5,18,"hola","nose", 78]
let diferentvalues3=[]

for (let i=0; i<diferentvalues.length;i++){
 try {
    
   let diferentvalues2 = parseFloat(diferentvalues[i])
  

    if(isNaN(diferentvalues3)){
     throw new Error(`No se puede convertir el valor: ${diferentvalues[i]}`);
    }

    diferentvalues3.push(diferentvalues2)

}
 

catch(error){
if(error instanceof Error){
console.log("se ha producido un error:",error.message)
}
}
}
console.log("valores convertidos correctamente", diferentvalues3)



//crea una funcion  que realice reintentos en caso de error hasta un maximo de 10


function reintentar(){
    for(let intento=0; intento<=10; intento++){
    try{
            if(Math.random() < 0.7){
                throw new Error("Intento fallido")
                
            }else{
                console.log(`intento #${intento} exitoso`)
                break
            }
        }catch(error){
            console.log(`intento #${intento},`,error.message)
            if(intento===10){
                console.log("se alcanzo el numero maximo de intentos")
            }
        }
    }
}
reintentar()