//! 1  &  2

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    if( !response.ok){
        throw new Error (`HTTP status: ${response.status}`)
    }
    return response.json() 
})
.then(data => {
    console.log(data)
})
.catch (error => {
    console.log("Error", error)
})





//!  3


async function getPublicaiones (){
try{
    const url = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!url.ok){
            throw new Error(`HTTP status: ${url.status}`)
        }
        const data = await url.json()
        console.log(data)
        return data
    } catch (error) {
        console.log("Error:", error)
    }
}
getPublicaiones() 


//!   4



async function createPublicacion(){
    try{
        const newPost={
            userId: 1,
            tittle: " post creado por dimitri",
            body: "cuerpo del post creado por dimitri"
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify (newPost)
    })

    const data = await response.json()
    console.log (data)
    }
    catch (error){
        console.log("Error", error)
    }
}

createPublicacion()


//!  5

async function updatePost() {
    try {
        const updatedPost = {
            userId: 10,
            title: "post actualizado por dimitri",
            body: "cuerpo del post actualizado por dimitri"
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost)
        })
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log("Error", error)
        }
}
updatePost()


//! 6

async function parcialPatch(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/78", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Post parcialmente actualizado by dimitri",
                body: "cuerpo del post parcialmente actualizado by dimitri"
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error){
        console.log("Error", error)
    }
        
}

parcialPatch()


//! 7

async function deletePost(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts/5", {
            method: "DELETE"
        })
        console.log("Post eliminado, status:", response.status)
    } catch (error){
        console.log("Error", error)
    }
}
deletePost()

//! 8

async function getWeather(city){
    const apiKey = "47736579587833793fa6a1e5606dc262"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

        try{
    const response = await fetch(url)
    const data= await response.json()
    console.log(data.weather)
    }catch(error){
        console.log("Error", error)
    }
}

getWeather("cali")


//! 9

async function getPokemon(){
    const url = `https://pokeapi.co/api/v2/pokemon/gengar`
        try{
            const response  = await fetch (url)
            const data = await response.json()
            console.log(data)
        }
        catch (error){      
            console.log("Error", error)
        }
}

getPokemon()



async function getPokemon(){
    const url = `https://pokeapi.co/api/v2/pokemon/gengar`
        try{
            const response  = await fetch (url)
            const data = await response.json()
            console.log(data.species)
            const speciesResponse = await fetch (data.species.url)
            const speciesData = await speciesResponse.json()
            console.log(speciesData)
            const evolutionResponse = await fetch (speciesData.evolution_chain.url)
            const evolutionData = await evolutionResponse.json()
            console.log(evolutionData)
        }
        catch (error){      
            console.log("Error", error)
        }
}

getPokemon() 
