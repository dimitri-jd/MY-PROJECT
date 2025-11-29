//exepcion
//prodeuce una exepcion

let myObject
//console.log(myObject.email)
//captura de errores de errores

//try-catch

try{
    //codigo que intenta ejecutar
console.log(myObject)
console.log("finaliza la ejecucion sin errores")
}catch{
//Bloque de error
console.log("se ha producido un error")

}

//captura del error

try{
   
console.log(myObject.myObject)

}catch(error){

    console.log("se ha producido un error",error.message)
}


//finally


try{
   
console.log(myObject.myObject)

}catch(error){

    console.log("se ha producido un error",error.message)
}finally{

    console.log("este codigo se ejcuta simepre")
}


//no etsa soportado

//try{
//console.log(myObject.myObject)

//}finally{

 //   console.log("este codigo se ejcuta simepre")
//}


//lanzamiento de errores

//throw

//throw new Error("se ha producido un error");

function sumIntegers(a,b){

    if( typeof a !== "number"|| typeof b !== "number"){
    throw new TypeError("esta operacion solo suma numeros")
    }


    if(!Number.isInteger(a)|| !Number.isInteger(b)){
        throw new Error ("esta opcion solo suma numeros enteros")
    }
    if(a==0 || b==0){
        throw new SumZeroIntegerError("se esta intentando sumar cero",a,b)
    }
return a + b
}

try{
console.log(sumIntegers(5,10))
//console.log(sumIntegers("5",10))
console.log(sumIntegers(5,"10"))
//console.log(sumIntegers("5","10"))
}catch(error){
    console.log("se ha producido un error", error.message)
}



//capturar varios tipos de errores



try{
//console.log(sumIntegers(5.5,10))
console.log(sumIntegers("5",10))

}catch(error){
if(error instanceof TypeError){
    console.log("se ha producido un error de tipo:",error.message)

}else if (error instanceof Error){
    console.log("se ha producido un error", error.message)
}
}



//Crear exepciones personalizadas


class  SumZeroIntegerError extends Error{
    constructor(measage,a,b){
        super(measage)
        this.a=a
        this.b=b
    }

    printNumbers(){
        console.log(this.a, "+", this.b)
    }
}

try{
    console.log(sumIntegers(0,10))
}catch(error){
    console.log("se ha producido un erro personalizado:",error.message)
    error.printNumbers()
}