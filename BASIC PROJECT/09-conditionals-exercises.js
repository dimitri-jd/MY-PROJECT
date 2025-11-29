// if / else / else if / terniaria
// 1. Imprime por consola tu nombre si una variable toma su valor 


let Name = 1
if   (Name== 1){
    console.log("juan david")
}




//2. Imprime por consola el usuario y contraseña concide con unos establecidos


let myUsuario = "juan"
let myContra = 123

if (myUsuario == "juan" && myContra==123 ){
    console.log ("usuario y contraseña son correctos")
} else if( myUsuario== "juan" && myContra!= 123 || myUsuario!= "juan" && myContra== 123 )
{
    console.log("usuario o contraseña incorrectos")
} else {
    console.log(" ninguno es correcto")
}

// 3. verifica si un numero es positivo, negativo o igual a 0 e imprime un mensaje

let num = (8)

if (num>=1 ){
    console.log ("el numero es positivo")
}else if ( num<= -1 ){
    console.log (" el numero es negativo")
}else
{
    console.log("el numero es 0")
}



// verifica si una persona puede votar o no (mayor o igual 18) e indica cuantos le faltan



let age = 17

if ( age > 18 || age==18){
    console.log(" la persona puede votar")
}else if ( age <18 ){
    console.log(`la persona no puede votar le faltan ${18 - age} años`)
}



//usa el operador terniario para asignar el vlaor  " adulto "
// "menor" a una variable dependiendo la edad 




let edad = 3

let number= edad >18 ? "es adulto": " es menor"
console.log (number)




// muestra en que estacion del año estamos dependiendo del valor de una
// variable "mes"



let mes = 10


    
if  (mes== 3|| mes==4 || mes==5){
    console.log(" la estacion es primavera")
}else if( mes== 6||mes==7||mes==8){
    console.log(" la estacion es verano")
}else if( mes== 9||mes==10||mes==11){
    console.log ("la esatcion es otoño")
}else if (mes== 12||mes==1||mes==2){
    console.log (" la estacion es invierno")
}else {
    console.log (" mes no encontrado")
}



// muestra el numero de dias que tiene un mes dependiendoo de la varibale
//dependjendo de la varibale del ejercicio anterior



if (mes== 1 || mes==3 ||mes== 5|| mes==7|| mes==8||mes==10||mes==12){
    console.log ( "este mes tiene 31 dias ")
}else if( mes== 4|| mes==6|| mes== 9|| mes== 11){
    console.log (" este mes tiene 30 dias ")
}else if( mes== 2){
    console.log("este mes tiene 28 dias ")
}



// usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma



let lenguaje = 2

let idioma 


switch(lenguaje){
    case 0:
        idioma="hola"
        break
    case 1:
        idioma="hello"
        break
    case 2:
        idioma="hallo"
        break
    case 3:
        idioma="dia duit"
        break
    case 4:
        idioma="ciao"
        break
    case 5:
        idioma="رحبً"
        break
    case 6:
        idioma="こんにちは"
        break
}


console.log(idioma)



let month= 11

let season

switch (month){
    case 0:
        season= "invierno "
        break
    case 1:
        season=" invierno"
        break
    case 2:
        season= " primavera"
        break
    case 3:
        season=" primavera"
        break
    case 4:
        season=" primavera"
        break
    case 5:
        season=" verano"
        break
    case 6:
        season= " verano"
        break
    case 7:
        season=" verano"
        break
    case 8: 
        season=" otoño"
        break
    case 9:
        season=" otoño"
        break
    case 10:
        season= " otoño"
        break
    case 11:
        season=" invierno"
        break
}


console.log( season)








let days



switch (mes){
    case 0:
        days= "enerp tiene 31 dias "
        break
    case 1:
        days=" febrero tine 28 dias"
        break
    case 2:
        days= " marzo tien 31 dias"
        break
    case 3:
        days=" abril tiene 30 dias"
        break
    case 4:
        days=" mayo tiene 31 dias"
        break
    case 5:
        days=" junio tiene 30 dias"
        break
    case 6:
        days= " julio tiene 31 dias"
        break
    case 7:
        days=" agosto tien 31 dias"
        break
    case 8: 
        days=" septiembre tiene 30 dias"
        break
    case 9:
        days=" octubre tiene 31 dias"
        break
    case 10:
        days= " noviembre tiene 30 dias"
        break
    case 11:
        days=" diciembre tiene 31 dias"
        break
}


console.log(days )

