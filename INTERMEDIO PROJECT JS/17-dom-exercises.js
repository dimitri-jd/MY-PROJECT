document.addEventListener("DOMContentLoaded", () => {
    const myTitle = document.getElementById("title")
    const myParagraph = document.getElementById("paragraph")
    const box = document.getElementById("box") 
    const button = document.getElementById("button")
    const text = document.getElementById("text")
    const list = document.getElementById("list")
    const deleteParagraph = document.getElementById("deleteParagraph")
    const deleteButton = document.getElementById("deleteButton")
    const contentDiv = document.getElementById("content")
    const greetBton = document.getElementById("greetBton")
    const textInput = document.getElementById("textInput")
    const result = document.getElementById("result")
    const backgroundBtn = document.getElementById("backgroundBtn")
    const body = document.getElementById("body")


    if (backgroundBtn && body) {
        backgroundBtn.addEventListener("click", () => {
            const randomColor = `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, "0")}`
            body.style.backgroundColor = randomColor
        })
    }




if( textInput && result){
    textInput.addEventListener("input", () =>{
        result.textContent =  textInput.value
    })
}






greetBton.addEventListener("click", () => {
    alert ("!HOLAAA¡")
})



if(contentDiv){
    const newHeading = document.createElement("h2")
    newHeading.textContent=" nuevo contenido"
    contentDiv.replaceChildren(newHeading)
}


    function deleteParagraphFunction(){
    
        deleteParagraph.remove()
    }
        deleteButton.addEventListener("click", deleteParagraphFunction)


function addElement(){

    if(text.value===""){
        alert("Por favor ingresa un elemento")
        return
    }
    const newElement = document.createElement("li")
    newElement.textContent = text.value 
    
    newElement.addEventListener("click", () => {
        newElement.remove()
    })

    list.appendChild(newElement)
    text.value = ""
}

button.addEventListener("click", addElement)

    if (myParagraph) {
        myParagraph.style.color = "blue"
        myParagraph.classList.add("azul")
    }

    if (box) {
        box.classList.add("resaltado")
    }


})



