
myArray= [1,2,3,4]

let person= {
    name: "juan",
    age: 18,
    alias: "dimitri"
}

let value = myArray[1]
console.log( value)

let myName= person.name
console.log(myName) 


//Destructuracion


//SINTAXIS EN ARRAY


let [value0,value1,value2,value3,value4]=myArray

console.log(value0) 
console.log(value1) 
console.log(value2) 
console.log(value3) 
console.log(value4) 

//Sintaxis de arrays con valores predeterminados 


let [value5=0,value6=0,value7=0,value8=0,value9=0]=myArray



console.log(value5) 
console.log(value6) 
console.log(value7) 
console.log(value8) 
console.log(value9) 

//ignorar elementos array

let [value10, , ,value13]=myArray


console.log(value10) 
console.log(value13) 

//Sintaxis objets


let {name,age,alias}=person

console.log(name) 
console.log(age) 
console.log(alias) 


//Sintaxis de objects con valores predeterminados 


let {name2,age2,alias2,email="juan@gmail.coom"}=person

console.log(name2) //No existe
console.log(age2) //No existe
console.log(alias2)//No existe
console.log(email)  


//Sintaxis objects con nuevos nombres de variables


let {name:name3, age:age3, alias:alias3}=person

console.log(name3) 
console.log(age3) 
console.log(alias3) 


//objets aninados 


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



let { name : name4, job:{name :jobname}}=person3
console.log (name4)
console.log(jobname)


//propagacion(...)

//sinatxis array

let myArray2=[... myArray,5,6]

console.log(myArray2)


let myArray3= [... myArray] // copia
console.log(myArray3)


//combiancion de arrays

let myArray4=[... myArray2,...myArray3, ...myArray]

console.log(myArray4)


//Sintaxis objects


let person4={...person, email:"juan@gmail.vom"}

console.log(person4)

//copia de objects


let person5={...person}
console.log(person5)