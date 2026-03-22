// objetos avanzados

//- prototipos y herencia

//prototipos  // cada objeto tiene una referencia a otro objeto llamado prototipo


let person={
    name: "juan",
    age: 30,
    greet(){
        console.log(`Hola, mi nombre es ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person)) 
person.sayAge= function(){
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()

//herencia 

let programmer = Object.create(person) //hereda de person
programmer.language="JavaScript"

programmer.name="dimitri"
console.log(person.name)
console.log(person.language)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
programmer.greet()
programmer.sayAge()


//- Metodos estaticos y de instancia

function Person(name,age){
    this.name=name  
    this.age=age
}

Person.prototype.greet=function(){
    console.log(`Hola, soy  ${this.name}`)
}

let new_person= new Person("dimitri",25)
new_person.greet()


// - Metodos avanzados

// assign  - unir objetos

let person_core= { name: "juan"}
let person_details ={ age: 30, alias: "dimitri"}

let fullPerson= Object.assign(person_core, person_details)
console.log(fullPerson) 


// keys, values, entries 


console.log(Object.keys(fullPerson)) //devuelve un array con las claves
console.log(Object.values(fullPerson)) //devuelve un array con los valores
console.log(Object.entries(fullPerson)) //devuelve un array con arrays de pares [clave, valor]