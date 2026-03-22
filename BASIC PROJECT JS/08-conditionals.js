// is , else if, else

// if (si)

let age =37

if (age==37){
    console.log("la edad es 37")
}



//else( si no)


if (age==37){
    console.log("la edad es 37")
}else{
    console.log("la edad no es 37")
}


//else if (si no, si)




if (age==37){
    console.log("la edad es 37")
}else if(age <18){ // se añaden mas datos 
    console.log("es menor de edad")

}else{
    console.log("la edad no es 37 ni es menor de edad")
}


//operador terniario


const measage =age ==37 ?"la edad es 37": "la eada no es 37"
console.log(measage)




// swich


let day = 3
let dayName

switch(day){
    case 0:
        dayName= "Lunes" 
        break
    case 1:
        dayName= "martes" 
        break
    case 2:
        dayName= "miercoles" 
        break
    case 3:
        dayName= "jueves" 
        break
    case 4:
        dayName= "viernes"
        break
    case 5:
        dayName= "sabado" 
        break
    case 6 :
        dayName= "domingo" 
        break
    default:
        dayName="numero de dia incorrecto"
     

}


console.log( dayName)




