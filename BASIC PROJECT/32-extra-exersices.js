// ! ejercicios de practica general

//!   1

function contrasenaValida(contra){
    if(contra==="2Fj(jjbFsuj" || contra=== "eoZiugBf&g9"){
        return true
    }else{
        return false
    }
}

console.log(contrasenaValida("2Fj(jjbFsuj"))
console.log(contrasenaValida("eoZiugBf&g9") )
console.log(contrasenaValida("123456") )
console.log(contrasenaValida("hola") )
console.log(contrasenaValida("") )


// !   2

function calcularImpuestos(edad, ingresos){
    if(edad>=18 && ingresos>=1000){
        return (ingresos * 0.4)
    }else{
        return 0
    }
}

console.log(calcularImpuestos(20, 2000)) 
console.log(calcularImpuestos(40, 10000))
console.log(calcularImpuestos(17, 5000))
console.log(calcularImpuestos(30, 500))





//!   3 


function bmi( peso, altura){
    let BMI = peso / altura**2
    if(BMI<18.5){
        return "Bajo de peso"
    }if(BMI>=18.5 && BMI<24.9){
        return "Normal"
    }if(BMI>=25 && BMI<=29.9){
        return "Sobrepeso"
    }if(BMI>=30){
        return "Obeso"
    }
}
console.log(bmi(65, 1.8)) 
console.log(bmi(72, 1.6))
console.log(bmi(52, 1.75)) 
console.log(bmi(135, 1.7)) 


//!   4

function imprimirArreglo(arreglo){
    for(let i=0; i<arreglo.length; i++){
        console.log(arreglo[i])
    }
}

imprimirArreglo([1, "hola", 2, "mundo"])


//!   5


function likes(num){
    if(num<1000){
        return num
    }else if(num>=1000 && num<1000000){
        return (num/1000).toFixed(0) + "K"
    }else if(num>=1000000 && num<1000000000){
        return (num/1000000).toFixed(0) + "M"
    }
}
console.log(likes(500))


//!   6


function fizzBuzz(numM){
    if(numM %3===0 && numM %5===0){
        return "FizzBuzz"
    }if(numM %3===0){
        return "Fizz"
    }if(numM %5===0){
        return "Buzz"
    }else{
        return numM
    }
}
console.log(fizzBuzz(3))
console.log(fizzBuzz(5))   
console.log(fizzBuzz(30)) 



//!   7

function contarRango(num1,num2){
    let contador = 0
    for(let i=num1+1; i<num2; i++){
            contador++
    }   
return contador 
}

console.log(contarRango(1332, 8743))
console.log(contarRango(1, 9))
console.log(contarRango(5, 6))


//!   8

function sumarRango(num3,num4){
    let contador = 0
    for(let i=num3; i<=num4; i++){
        contador += i
    }   
return contador 
}
console.log(sumarRango(0, 10))
console.log(sumarRango(12, 14))
console.log(sumarRango(5, 5))



//!   9 

function numeroDeAes(texto){
    let contador = 0
for(let i=0; i<texto.length; i++){
    texto[i] = texto[i].toLowerCase()
    if(texto[i]==="a"){
        contador++
    }
    }
return contador
}
console.log(numeroDeAes("abracadabra"))


//!   10


function numeroDeCaracteres(caracter1,caracter2){
let contador = 0
for(let c=0; c<caracter1.length; c++){
    if(caracter1[c]===caracter2){
        contador++
    }  
    }
return contador
}
console.log(numeroDeCaracteres("hola mundo", "o"))
console.log(numeroDeCaracteres("MMMM", "m"))
console.log(numeroDeCaracteres("eeee", "e"))


//!   11
function sumarArrgelo(numeros){
    let suma=0
    for(let s=0;s<numeros.length; s++){
        suma= suma + numeros[s]
    }
    return suma
}
console.log(sumarArrgelo([1, 2, 3, 4, 5]))
console.log(sumarArrgelo([10, 20, 30]))



function sumarArrgelo(numeros){
    let suma=0
    for(let nSum of numeros){
        suma += nSum
    }
    return suma
}
console.log(sumarArrgelo([1, 2, 3, 4, 5]))



//!   12
function multiplicarArreglo(nums){
let total=1
for(let nums1 of nums){
    total *= nums1
}
return total
}
console.log(multiplicarArreglo([1, 2, 3, 4, 5]))
console.log(multiplicarArreglo([4, 1, 2, 3])) 
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) 
console.log(multiplicarArreglo([])) 

//!   13

function removerCeros(arraynum){
let newarraynum = []
for(let num of arraynum){
    if(num!==0){
        newarraynum.push(num)
    }
}
return newarraynum
}
console.log(removerCeros([1, 0, 2, 3, 0, 4, 5]))
console.log(removerCeros([0, 0, 0, 0]))
console.log(removerCeros([0, 1, 0, 2, 0, 3])) 
console.log(removerCeros([9, 3, 6, 4])) 
console.log(removerCeros([0, 0, 0])) 


//!   14

function sumarArreglo(arraynums,inInicial, inFinal){
    let suma=0
    if(inInicial===0 && inFinal===0){
        return 0
    }
for(let i=inInicial;i<=inFinal;i++){
suma+=arraynums[i]
}
return suma
}
console.log(sumarArreglo([1, 2, 3, 4, 5], 1, 3))
console.log(sumarArreglo([10, 20, 30, 40, 50], 0, 4))
console.log(sumarArreglo([1, 2, 3], 1, 2)) 
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) 
console.log(sumarArreglo([7, 8, 9], 0, 0)) 


//!   15

function transcribir(tex){
tex = tex.split("")
for(let i=0; i<tex.length; i++){
if(tex[i]==="G"){
    tex[i]="C"
}else if(tex[i]==="C"){
    tex[i]="G"
}else if(tex[i]==="T"){
    tex[i]="A"
}else if(tex[i]==="A"){
    tex[i]="U"
}
}

return tex.join("")
}

console.log(transcribir("ACGT")) 
console.log(transcribir("ACGTGGTCTTAA"))  



//!   16
function capitalizar (texto){
    texto = texto.split(" ")
    for(let i=0; i<texto.length; i++){
        if (texto[i].length>0){
            texto[i] = texto[i][0].toUpperCase() + texto[i].slice(1).toLowerCase()         }
}
    return texto.join(" ") }
    console.log(capitalizar("hola mundo"))
console.log(capitalizar("make it real")) 


//!   17

function capitalizar(texto) {
if (texto.length === 0) return texto; 
return texto[0].toUpperCase() + texto.slice(1).toLowerCase();
}


console.log(capitalizar("hola mundo"));   
console.log(capitalizar("make it real")); 



//!   18


function max (Nums){
    let mayor= Nums[0]
    for ( let n of Nums){
        if (n>mayor){
            mayor=n
        }
    }
    return mayor
}

console.log(max([1, 2, 3, 4, 5]))

console.log(max([3, 9, 6])) 
console.log(max([67, 35, 54, 26])) 
console.log(max([5, 9, 2, 4, 5, 7])) 



//!   19

function min(Nums){
let menor= Nums[0]
for( let n of Nums){
    if(n<menor){
        menor=n
    }
}
return menor
}

console.log(min([3, 9, 6])) 
console.log(min([67, 35, 54, 26])) 
console.log(min([5, 9, 2, 4, 5, 7])) 


//!   20


function password(text){
    text= text.split("")
    for(let i=0; i<text.length; i++){
        if(text[i]===" "){
    text[i]=""
}if(text[i].toUpperCase()){
    text[i]= text[i].toLowerCase()
}if(text[i]==="a"){
    text[i]="4"
}if(text[i]==="e"){
    text[i]="3"
}if(text[i]==="i"){
    text[i]="1"
}if(text[i]==="o"){
    text[i]="0"
}
}
return text.join("")
}


console.log(password("hola")) 
console.log(password("esta es una prueba")) 
console.log(password(""))


//!   21

function pares(Numbers){
let NumPares=[]
for (let n of Numbers){
    if(n%2===0){
        NumPares.push(n)
    }
}return NumPares
}

console.log(pares([1, 2, 3, 4, 5, 6])) 
console.log(pares([])) 
console.log(pares([1, 3, 5, 7, 9]))
console.log(pares([2, 4, 6, 8, 10]))

//!   22

function impares(Numbers){
let NumImpares=[]
for (let n of Numbers){
    if(n%2!==0){
        NumImpares.push(n)
    }
}
return NumImpares
}

console.log(impares([1, 2, 3, 4, 5, 6])) 
console.log(impares([])) 




///!   23
function duplicar(Numbers){
    let NumDuplicados=[]
    for (let n of Numbers){
        NumDuplicados.push(n*2)
    }
    return NumDuplicados
}

console.log(duplicar([1, 2, 3])) 
console.log(duplicar([])) 
console.log(duplicar([4, 5, 6, 7]))
console.log(duplicar([10, 20, 30, 40, 50]))


//!   24

function startwithA(text){
    let textA=[]
    for(let p of text){
        if(p[0].toLowerCase()==="a"|| p[0].toUpperCase()==="A"){
            textA.push(p)
            
        }
    }
    return textA
}


console.log(startwithA(["beta", "alfa", "Arbol", "gama"])) 
console.log(startwithA(["beta", "delta", "gama"])) 
console.log(startwithA([])) 


//!   25

function finishwithS(text){
    let textS=[]
    for(let p of text){
        if(p[p.length-1].toLowerCase()==="s"|| p[p.length-1].toUpperCase()==="S"){
            textS.push(p)
            
        }
    }
    return textS
}


console.log(finishwithS(["pruebas", "arroz", "árbol", "tokens"])) 
console.log(finishwithS(["beta", "delta", "gama"])) 
console.log(finishwithS([])) 



//!   26


function imprimirMatriz(matriz){
    for(let i=0; i<matriz.length; i++){
console.log(matriz[i].join(" "))

}

}
imprimirMatriz([
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
])


//!   27

function numerosAPalabras(numeros){
    let palabras=[]
    for(let n of numeros){
        if(n===1){
            palabras.push("uno")
        }else if(n===2){
            palabras.push("dos")
        }else if(n===3){
            palabras.push("tres")
        }else if(n===4){
            palabras.push("cuatro")
        }else if(n===5){
            palabras.push("cinco")
        }else if(n===6){
            palabras.push("seis")
        }else if(n===7){
            palabras.push("siete")
        }else if(n===8){
            palabras.push("ocho")
        }else if(n===9){
            palabras.push("nueve")
        }else{
            palabras.push("cero")
        }
    }
    return palabras
}
console.log(numerosAPalabras([1, 2, 3, 4, 5]))
console.log(numerosAPalabras([6, 7, 8, 9, 0]))



function numerosAPalabras(numeros) {
    const palabras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    return numeros.map(n => palabras[n] ?? "cero");
}

console.log(numerosAPalabras([1, 2, 3, 4, 5]));
console.log(numerosAPalabras([6, 7, 8, 9, 0]));

//!   28
function palabrasANumeros(palabras) {
    const mapa = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };
    return palabras.map(p => {
        const clave = p.trim().toLowerCase();
        return mapa[clave] ?? 0;
    });
}
console.log(palabrasANumeros(["uno", "dos", "tres", "cuatro", "cinco"]))
console.log(palabrasANumeros(["seis", "siete", "ocho    ", "nueve", "cero"]))


//!   29

class Persona {
    constructor (nombre, edad) {
        if (edad <= 0) {
            throw new Error("la edad no puede ser negativa");
        }
        this._nombre = nombre;
        this._edad = edad;
    }

    presentarse() {
        console.log(`hola soy ${this._nombre} y tengo ${this._edad} años`);
    }
}

let persona= new Persona ("dimitri", 25)
persona.presentarse()
console.log(persona._nombre)

//!   30



class CuentaBancaria{
    constructor(titular, saldo=0){
        this.titular=titular
        this.saldo=saldo
    }
    bienvenida(){
        console.log(`bienvenido ${this.titular}`)
    }
    consultarSaldo(){
        console.log(`su saldo es de ${this.saldo}`)
    }
    
    depositar(monto){
        if(monto<=0){
            throw new Error("el monto a depositar debe ser mayor a 0")
        }else{
            this.saldo+=monto
        }
    }
    retirar(monto){
        if(monto>this.saldo){
            throw new Error ("fondos insuficientes")
        }else if (monto<=0){
            throw new Error("el monto a retirar debe ser mayor a 0")
        }else{
            this.saldo-=monto
        }
    }
}
try{
let cuenta= new CuentaBancaria("dimitri", 100)
cuenta.bienvenida()
cuenta.consultarSaldo()
cuenta.depositar(50)
cuenta.consultarSaldo()
cuenta.retirar(30)
cuenta.consultarSaldo()
// cuenta.retirar(500)
cuenta.depositar(-20)


}catch(error){
    console.log("se ha producido un error:",error.message)
}