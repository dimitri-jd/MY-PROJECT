//usa destructuracion para extraer los dos primeros elementos de un array 

let animales=["panda", "cocodrilo", "puma","leon", "loro"]

let [animal1,animal2]=animales

console.log(animal1+","+animal2)
//console.log(animal2)


// Usa destructuracion en un array y asigna un valor predeterminado a una variable 


let juegos=["dark soul","fortnite","cod","valorant","apex"]

let[game1,game2, game3, game4, game5,game6="no existe" ]=juegos


console.log(game1)
console.log(game2)
console.log(game3)
console.log(game4)
console.log(game5)
console.log(game6)


//Usa destructuracion para extraer dos propiedades de un objeto

games={
shooter: "warzone",
tacticalshooter: "valorant",
rpg: "league of legent",
cars:function(){
    console.log("BLUR")
},
    stores:{
        steam: "buena calidad y variedad",
        epicgames:" poca variedad buena calidad",
        riot: "pesima",
        externs: function(){
            console.log (" piratas web")
        }

    }
}


let{shooter,rpg }=games
console.log(shooter)
console.log(rpg)

//usa desestructuracionpara extraer dos propiedades de un objeto y asignalas a nuevas varibales 
//con nombres diferentes 


let {shooter:battelroyale,rpg:vicio}=games

console.log(battelroyale)
console.log(vicio)

//usa desetructuracion  para extraer dos propiedades de un objeto anidado




let { stores:{steam:tienda1,riot:tienda2}}=games

console.log(tienda1)
console.log(tienda2)


// usa propagacion para combinar dos arrays en uno nuevo

let verano=["junio","julio","agosto"]


let combi=[...animales,...verano]

console.log(combi)

//usa propagacion para crear un acopia de un array


let verano2=[...verano]
console.log(verano2)


//ua propagacion para combinar dos objetos objetos en uno nuevo
let person3= {
    name: "juan",
    age: 18,
    alias: "dimitri",
    walk: function(){
         console.log( "la perosna camina")
    },
}


let gameUser={...games,...person3}


console.log(gameUser)

let gameStore={...games}
console.log(gameStore)

let {stores:{riot:reseña1}}=games
let final={...person3, animalfav: animal1,juegofav: game3,...game1}
console.log(final, reseña1)



