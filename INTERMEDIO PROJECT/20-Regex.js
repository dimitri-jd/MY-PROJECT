//Expresiones regulares
// Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda.
// Se utilizan principalmente para la búsqueda de patrones en cadenas de texto y para la manipulación de texto.


// - sintaxis

const regex = /abc/
const regex2 = RegExp("abc")
const text = "hola abc JavaScript"

// test: verifica coincidencia con true o false 

console.log(regex.test(text)) 
console.log(regex2.test(text))




const text2 = " Mi edad es 37"
const regex3 = /\d/g
const regex4 = /[0-3]/
 console.log(( regex3.test(text2))) // true
console.log(( regex4.test(text2))) // true

// replace : reempalaza el texto que coincide con el patron 

const regex5 = /JavaScript/
console.log("Hola JavaScript".replace(regex5,"JS"))
const text3 = "Estoy contando 1 2 3 4 5 6 7"
console.log(text3.replace(regex3,"[numero] "))


// exec: retorna los detalles de la coincidencia

console.log(regex3.exec(text3))

while( (match = regex3.exec(text3)) !== null){
    console.log(match)
}