//set



// declaracion



let myset = new Set()

console.log(myset)
//inicializacion



myset= new Set(["juan","david","escobar",false,1, "juandavidescobarQgmail.com"])


console.log(myset)




//metodos comunes


//add y delete


myset.add( "numero de telefono 123123")

console.log(myset)



myset.delete("juandavidescobarQgmail.com")

console.log (myset)




console.log(myset.delete("juan"))
console.log(myset.delete(4))


console.log(myset)
//ejemplo

if(myset.delete(4)){

}



//has


console.log(myset.has("juan"))
console.log(myset.has("david"))




//size


console.log(myset.size)


//convertir un set a array

let myarray = Array.from(myset)

console.log(myarray)


//convertir un array a set

myset= new Set(myarray)

console.log(myset)

//no admite duplicados

myset.add("escobar")
myset.add("escobar")
myset.add("escobar")
console.log(myset)
