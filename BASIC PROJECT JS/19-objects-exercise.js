//crea un objeto  con 3 propiedades


let games={
    historia:" read redation",
    shooter: " warzone",
    tacticalshooter:" valorant",
}

console.log(games)




games.rpg= " league of legent"

console.log(games)


delete games.historia
console.log(games)


games. cars=function(){
    console.log("BLUR")
}
console.log(games)    
games.cars()
    

for (let keys in games){
    console.log( keys+ ":"+ games[keys] )
}


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

console.log (games)



console.log(games==games.stores)
console.log(games===games.stores)
console.log(games.shooter==games.historia)