// cera un array que almacene cinco animales

let animales=["panda", "cocodrilo", "puma","leon", "loro"]


console.log(animales)


//añade dso mas, uno al principio y otro al final


animales.unshift("iguana")            //agergar al pincipio
animales.push("oso")                   //agregar al final
console.log(animales)



//elimina el que se encuentre en terceta posicion

animales.splice(2,1)
console.log(animales)

//crea un set que almacene 5 libros


let libros= new Set(["principito","100soledad", "poder","matematicas","sofware"])

console.log(libros)

libros.add("cocina","poder")
console.log(libros)

libros.delete("matematicas")
console.log(libros)


// crea un mapa que asocie el numero del mes a su nombre
//compruebe si el mes 5 existe en el map e imprime su valor
//añade el mapa una calve con un array como que almacene los meses de verano


let meses
let verano=["junio","julio","agosto"]

meses=new Map([
    [1,"enero"],
    [2,"febrero"],
    [3,"marzo"],
    [4,"abril"],
    [5," mayo"],
    [6," junio"],
    [7,"julio"],
    [8,"agosto"],
    [9,"septiembre"],
    [10,"octutre"],
    [11,"noviembre"],
    [12,"diciembre"],
    ["verano",verano],

])

console.log(meses)

console.log(meses.has(5))
console.log(meses.get(5))


// crea un array, transformalo a un set y alamcenalo en un map


let juegos=["dark soul","fortnite","cod","valorant","apex","counter strike","lol","elden ring"]


console.log(juegos)

juegos=new Set(juegos)

console.log(juegos)

let battelroyale= ["fornite","cod","apex"]
let tacticalshoother=["counter strike","valorant"]
let typeSoul= ["dark soul","elden ring"]
let strategy=[ "lol"]

juegos=new Map([
    ["todos los juegos",juegos],
    ["categorias","-"],
    ["battel royale",battelroyale],
    ["tacticalshoother", tacticalshoother],
    ["typeSoul", typeSoul],
    ["strategy",strategy],
])

console.log(juegos)