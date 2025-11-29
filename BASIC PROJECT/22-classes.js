//clases





class Person{

    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

}

//sintaxis

let person = new Person("juan",18,"dimitri")

console.log(person)



//valores por defecto 

class DefaultPerson{

    constructor(name ="sin nomrbre",age=0,alias="sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person2= new DefaultPerson("juan",19)
console.log(person2)

//acceso a propiedades

console.log(person2.name)
console.log(person2["alias"])


person2.alias= "dimitri"

console.log(person2.alias)

//FUnciones en clases 


class Person3{

    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.name = alias
    }
    walk(){
        console.log("las persona juega")
    }
}


let person3=new Person3("juan ",19 , "dimitri")
person3.walk()



//porpiedades privadas


class PrivatePerson{

    #bank

    constructor(name,age,alias,bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}

let person4=new PrivatePerson("juan",19 , "dimitri",38123317312)
//console.log(person4.bank)     //no podemos acceder 

//perosn5.bank= "new 38123317312"//bank no es #bank 
console.log(person4)


//Getters y Setters



class GetPerson{

    #name
    #age
    #alias
    #bank


    constructor(name,age,alias,bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
         this.#bank = bank
      
    }
    get name(){
        return this.#name
    }
}

let person5= new GetPerson("juan",19 , "dimitri",38123317312)
console.log(person5)
console.log(person5.name)



class GetSetPerson{

    #name
    #age
    #alias
    #bank
    constructor(name,age,alias,bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
         this.#bank = bank
      
    }
   
    set bank(newBank){
        this.#bank=newBank
    }
}

let person6= new GetPerson("juan",19 , "dimitri",38123317312)
console.log(person6)
console.log(person6.name)

person6.bank="new 192831902"
console.log(person6.bank)


//Herencia


class animal {
    constructor(name){
        this.name=name
    }

    sound(){
        console.log("emite un sonido generico")
    }
}


class Dog extends animal{

    sound(){
        console.log("wau")
    }

    run(){
        console.log("el perro corre")
    }
    
}


class Fish extends animal{

    constructor(name,size){
        super(name)
        this.size=size
    }

    swim(){
        console.log("el pez nada")
    }
    
}



let myDog = new Dog("kratos")
myDog.run()
myDog.sound()



let myFish = new Fish("nemo", 27)
myFish.swim()
myFish.sound()


//metodos estaticos 



class MathOperations{
    static sum(a,b){
        return a+b
    }
}

console.log(MathOperations.sum(5,10))