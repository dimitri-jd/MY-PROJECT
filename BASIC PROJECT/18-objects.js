//objects


//SINTAXIS



let person= {
    name: "juan",
    age: 18,
    alias: "dimitri"
}


//acceso  a propiedades 


//notacion punto

console.log(person.name)


//notacin de corchetes


console.log(person["name"])


//modificacion de propiedades 

person.name = "juan david"


console.log(person.name)

console.log(typeof person.age)

person.age="27"
console.log(person.age)

console.log(typeof person.age)



//eliminar propiedaddes 



delete person.age
console.log( person)

//nueva propiedad

person.email= "juandavidescobar@gmail.com"

console.log(person)


person["age"]=27
console.log( person)


//metodos( funciones )


let person2= {
    name: "juan",
    age: 18,
    alias: "dimitri",
    walk: function(){
         console.log( "la perosna camina")
    }
}

person2.walk()

//anidacion de objects

let person3= {
    name: "juan",
    age: 18,
    alias: "dimitri",
    walk: function(){
         console.log( "la perosna camina")
    },
    job:{
        name: "estudiante",
        exp: "ninguna",
    work: function(){
         console.log( `la perosna de ${this.exp} experiencia no trabaja`)
    }
    }
}
console.log(person3)


console.log(person3.job)
console.log(person3)
console.log(person3.job.name)
person3.job.work()




// igauldad de objects

let person4={
     name: "juan david",
  alias: "dimitri",
  email: "juandavidescobar@gmail.com",
  age: 27
}

console.log(person)
console.log(person4)

console.log(person==person4)
console.log(person===person4)

console.log(person.name==person4.name)



//iteracion

for (let key in person4 ){
    console.log(key + ":" + person4[key])
}

//funcion como objetos


function Person(name ,age){ // deberiade ser una clase
    this.name= name
    this.age= age
}

let person5 = new Person ("brais" ,  37)
console.log(person5)


console.log(typeof person5)
console.log(typeof person4)
