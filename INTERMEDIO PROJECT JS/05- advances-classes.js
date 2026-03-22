// Clases avanzadas


class Person {
    constructor(name,age){
        this.name=name  
        this.age=age
    }

    greet(){
        console.log(`Hola, soy  ${this.name}`)
    }
}


const person = new Person("dimitri",25)
person.greet()

person.sayAge= function(){
    console.log(`Tengo ${this.age} años`)
}

person.sayAge()


// clases abstractas // No se pueden instanciar directamente, solo a través de subclases

class Animal {
    constructor(name){
        if (new.target === Animal) {
            throw new TypeError("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound(){
        throw new Error("Método abstracto, debe ser implementado por subclases")
}
}

//Error al intentar instanciar la clase abstracta
// const animal = new Animal("león")
// console.log(animal)


//- Polimorfismo //  mismo método, diferentes comportamientos

class Cat extends Animal {
    makeSound(){
        console.log("Miau")
    }
}

class Dog extends Animal {
    makeSound(){
        console.log("Guau")
    }
}


const cat = new Cat("Michi")
console.log(cat)
cat.makeSound()


const dog = new Dog("Firulais")
console.log(dog)
dog.makeSound()


// - Mixins // Reutilización de código entre clases no relacionadas


const FlyMixin = {
    fly(){
        console.log(`${this.name} está volando`)
    }   
}

class Bird extends Animal {}

class Dragon extends Animal {}

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("Loro")
console.log(bird.name)
bird.fly()


const dragon = new Dragon("Draco")
console.log(dragon.name)
dragon.fly()


// - patron Singelton // Asegura que una clase tenga una única instancia y proporciona un punto de acceso global a ella


class Session {

    constructor(name){
        if(Session.instance){
            return Session.instance
        }
        this.name=name
        Session.instance=this
    }
}

const session1 = new Session("dimitri")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)


//- Symbol // crea identificadores unicos para propiedades de objetos

const ID = Symbol("id")

class User {
    constructor(name){
        this.name=name
        this[ID]= Math.random()
    }
    getId(){
        return this[ID]
    }
}
const user = new User("dimitrix")
console.log(user.name)
//console.log(user.ID) // undefined
console.log(user.getId())

//- instanceof

class Car{ }

const car = new Car()
console.log(car instanceof Car) // true


// create 

const anotherCar = Object.create(Car.prototype)
console.log(anotherCar instanceof Car) // true
console.log(anotherCar)



//- Proxy // Intercepta operaciones en objetos

const  proxy ={
    get(target, property){
        console.log(`Accediendo a la propiedad: ${property}`)
        return target[property]
    },
    set(target, property, value){
    if (property === "balance" && value < 0){
        throw new Error("El balance no puede ser negativo")
    }
    target[property]=value
}
}

class BankAccount {
    constructor(balance){
        this.balance=balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance=50
console.log(account.balance)

