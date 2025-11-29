// Manejo del DOM ( Document Object Model )


// seleccionar elementos del DOM

// Metodos basicos ( selector HTML )

const myElementById = document.getElementById ("ID")  // selecciona un elemento por su ID unico

const myElementByClassName = document.getElementsByClassName ("class")  // selecciona elementos por su clase

const myElementByTagName = document.getElementsByTagName ("tag")  // selecciona elementos por su etiqueta


// Metodos modernos (selector CSS)

document.querySelector (".paragraph")  // selecciona el primer elemento que coincide con el selector CSS
document.querySelectorAll (".paragraph")  // selecciona todos los elementos que coinciden con el selector CSS   



//-  Manipulacin de elementos 

const title = document.getElementById ("title") //
title.textContent = "hola javascript"  // cambia el texto del elemento


const container = document.querySelector (".container")
container.innerHTML = "<p> Nuevo parrafo </p>"  // cambia el contenido HTML del elemento


//- Modificacion de atributos

// Obtencion de artributo

const link = document.querySelector("a") // selecciona el primer elemento <a> (enlace) del documento
const url =link.getAttribute("href")  // obtiene el valor del atributo href


// Establecimiento de atributo
link.setAttribute("href", "https://www.ejemplo.com")  // establece un nuevo valor para el atributo href

//comprobacion de atributo
const hasTarget = link.hasAttribute("target")  // verifica si el atributo target existe

// eliminacion de atributo
link.removeAttribute("target")  // elimina el atributo target


// - Interaccion con clases CSS

const box = document.querySelector(".box")
box.classlist.add("selected")  // agrega una clase CSS al elemento
box.classList.remove("selected")  // elimina una clase CSS del elemento
box.classList.toggle("selected")  // agrega o elimina una clase CSS segun su existencia

const button = document.querySelector("button")
button.style.backgroundColor = "blue"  // cambia el color de fondo del boton
button.style.color = "white"  // cambia el color del texto del boton
button.style.padding = "10px"  // cambia el relleno del boton


// - Creacion y eliminacion de elementos

// Creacion 

const newParagraph = document.createElement("p") // crea un nuevo elemento de parrafo
newParagraph.textContent = "Este es un nuevo parrafo creado desde js"  // establece el texto del nuevo parrafo
newParagraph.style.padding = "8px"  // agrega estilo al nuevo parrafo

container.appendChild(newParagraph)  // agrega el nuevo parrafo al contenedor

const itemsList = document.querySelector("ul") // selecciona el primer elemento <ul> (lista desordenada) del documento
const newItem = document.createElement("li") // crea un nuevo elemento de lista
newItem.textContent = "Nuevo elemento de lista"  // establece el texto del nuevo elemento de lista

// Insercion en un lugar concreto

const secondItem = itemsList.children[1] // selecciona el segundo elemento hijo de la lista
itemsList.insertBefore(newItem, secondItem) // inserta el nuevo elemento antes del segundo elemento

itemsList.append(newItem) // agrega el nuevo elemento al final de la lista
itemsList.prepend(newItem) // agrega el nuevo elemento al inicio de la lista
secondItem.before(newItem) // inserta el nuevo elemento antes del segundo elemento
secondItem.after(newItem) // inserta el nuevo elemento despues del segundo elemento

// Eliminacion

newParagraph.remove()  // elimina el nuevo parrafo del DOM

//eliminacion tradicional

const parent = newParagraph.parentElement
parent.removeChild(newParagraph)  // elimina el nuevo parrafo del DOM a traves de su elemento padre


// - Elementos del DOM

function showMsg(){
    alert ("Clic!")
}

const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", showMsg) 


sendButton.addEventListener("click", () => {
    alert ("Clic con funcion flecha!")
})


// - Eventos comunes

document.addEventListener("DOMContentLoaded", () => {
    console.log("El DOM esta completamente cargado")
})

sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "green"
})


sendButton.addEventListener("mouseleave", () => {
    sendButton.style.backgroundColor = "blue"
})


const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    // Codigo
})
