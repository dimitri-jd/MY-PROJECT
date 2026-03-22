//MAP

//declaracion

let myMap = new Map()


console.log (myMap)


//inicializacion


myMap= new Map([
    ["name","juan"],
    ["email","juandavidescobar@1283"],
    ["age",19]
])

console.log( myMap)


//set


myMap.set("alias","dimitri")
myMap.set("name", "juan david")

console.log( myMap)



//get


console.log(myMap.get("name"))

console.log(myMap.get("surname"))



// has


console.log(myMap.has("surname"))
console.log(myMap.has("age"))


//delete

myMap.delete("email")
console.log( myMap)

///keys y values


console.log( myMap.keys())

console.log( myMap.values())

console.log( myMap.entries())


//size

console.log( myMap.size)



//clear

myMap.clear()
console.log( myMap)







