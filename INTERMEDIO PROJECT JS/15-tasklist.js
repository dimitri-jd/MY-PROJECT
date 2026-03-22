const text=document.getElementById("text")
const button=document.getElementById("button")
const list=document.getElementById("list")


function addTask(){

if(text.value===""){
    alert("Por favor ingresa una tarea")
    return
}

const newElement=document.createElement("li")
newElement.textContent=text.value

newElement.addEventListener("click", () => {
    newElement.remove()
})

    list.appendChild(newElement)

    text.value = ""
}


button.addEventListener("click", addTask)

text.addEventListener("keypress", (event) => {
if (event.key === "Enter"){
    addTask()
    }
})


button.style.color="red"
button.style.padding="20px"
button.style.backgroundColor="black"