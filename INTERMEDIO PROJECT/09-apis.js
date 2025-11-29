// Manejo de APIs

//- APIs REST ( HTTP + URLs + JSON )


// Metodos HTTP
// - GET // Obtener datos
// - POST // Enviar datos
// - PUT // Actualizar datos
// - DELETE // Eliminar datos


// Codigs de respuesta HTTP:
// - 200 OK // Solicitud exitosa
// - 201 Created // Recurso creado exitosamente
// - 400 Bad Request // Solicitud incorrecta
// - 404 Not Found // Recurso no encontrado
// - 500 Internal Server Error // Error en el servidor


// Consumir una API


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        //Transforma la respuesta a formato JSON
        return response.json()
    })
    .then(data=>{
        //Procesa los datos obtenidos
        console.log(data)
    })
    .catch(error => {
        // Captura errores
        console.log("Error", error)
    })


// Uso de async/await

async function getPosts(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data= await response.json()
    console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

getPosts()


//Solicitud POST


async function createPosts(){
    try{

        const newPost={
            userId: 1,
            title: "este es el titulo de mi posts",
            body: "este es el cuerpo de mi posts"
        }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })


    const data= await response.json()
    console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

createPosts()


//Manejo de errores

fetch("https://jsonplaceholder.typicode.com/mouredev")
    .then(response => {
        if(!response.ok){
            throw new Error(`HTTP status: ${response.status}`)
        }
        return response.json()
    })
    .catch(error => {
        console.log("Error", error)
    })



// Metodos HTTP adicionales 
// - PATCH // Actualizacion parcial de un recurso 
// - OPTIONS // Solicitar opciones de comunicacion para un recurso



async function partialPostsUpdate(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/10",{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: "Este es el titulo de mi nuevo post" })
    })


    const data= await response.json()
    console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

partialPostsUpdate()


// Auntenticacion mediante API key



async function getWeather(city){
    const apiKey = "47736579587833793fa6a1e5606dc262"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

        try{
    const response = await fetch(url)
    const data= await response.json()
    console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

getWeather("Madrid")


// otros metodos de autenticaion y autorizacion
//Bearer tokens
// - JWT ( JSON Web Tokens )



// Versionado de APIs
// - https://api.example.com/v1/resource
// - https://api.example.com/v2/resource



async function getPokemon(pokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        try{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    }catch(error){
        console.log("Error", error)
    }
}

getPokemon("pikachu")



async function getPokemon(pokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        try{
    const response = await fetch(url)
    const data = await response.json()
    console.log(`Habilidades de ${data.name}:`)
    data.abilities.forEach(ability => {
        console.log(ability.ability.name)
    })
    }catch(error){
        console.log("Error", error)
    }
}

getPokemon("pikachu")
