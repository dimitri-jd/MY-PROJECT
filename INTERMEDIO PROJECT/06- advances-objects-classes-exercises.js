// ! 1

class BankAccount{
    constructor(name,monto=0){
        this.name=name;
        this.monto=monto;
    }
    depositar(monto){
        this.monto += monto;
    console.log(`Bienvenido ${this.name}, acabas de depositar $${monto}. Nuevo saldo: $${this.monto}`);
    }

    retirar(monto){
        this.monto -= monto
        console.log(`Has retirado $${monto}. Nuevo saldo: $${this.monto}`);
        if (this.monto < 0){
            console.log("Fondos insuficientes")
            this.monto += monto
        }
    }
}

const account = new BankAccount("Dimitrix",100)
account.depositar(50)
console.log(account.monto)
account.retirar(200)
console.log(account.monto)


console.log("---------------------------------------------------")
// ! 2

class videoGameS{
    constructor(name,genere){
        if(new.target === videoGameS){
            throw new Error("No se puede instanciar directamente")
        }
        this.name=name;
        this.genere=genere;
    }

    typeofGame(){
        throw new Error("Metodo typeofGame debe ser implementado por la subclase")
    }
}


class RPG extends videoGameS{
    typeofGame(){
        console.log(`${this.name} es un juego de ${this.genere}`)
    }
}

const game1 = new RPG("The Witcher 3","RPG")
game1.typeofGame()


class FPS extends videoGameS{
    typeofGame(){
        console.log(`${this.name} es un juego de ${this.genere}`)
    }
}

const game2 = new FPS("Call of Duty","FPS") 
game2.typeofGame()

console.log("---------------------------------------------------")
// ! 3

const platformMixin={
    platform(platformName){
        console.log(`${this.name} esta disponible en ${platformName}`)
    }
}

class Action extends videoGameS{}

class Adventure extends videoGameS{}

Object.assign(Action.prototype,platformMixin)
Object.assign(Adventure.prototype,platformMixin)

const game3 = new Action ("Devil May Cry","Accion")
game3.platform("PC y Consolas")

const game4 = new Adventure ("Tomb Raider","Aventura")
game4.platform("PC y Consolas")

console.log("---------------------------------------------------")
// ! 4

let infoPersona = {
    name: "Dimitri",
    age: 25,
    ocupacion: "Programador",
    favGame: "cyberpunk 2077"
}

infoPersona.showInfo = function(){
    console.log(`Hola, mi nombre es ${this.name}, soy ${this.ocupacion} y mi juego favorito es ${this.favGame}`)
}

infoPersona.showInfo()


console.log("---------------------------------------------------")
// ! 5

let hobbys = Object.create(infoPersona)  
hobbys.hobby1 = "Jugar videojuegos"
hobbys.hobby2 = "Leer libros"
hobbys.showHobbies = function(){
    console.log(`Mis hobbies son: ${this.hobby1} y ${this.hobby2}`)
}

hobbys.showHobbies()


let infoPersona2 ={
    direccion: "Calle Falsa 123",
    pais: "Argentina",
    estadoCivil: "Soltero"
}

let fullinfo = Object.assign(infoPersona,infoPersona2)

console.log(fullinfo)


console.log("---------------------------------------------------")

let cuentaBancaria = {
    get (target,property,){
        if(property === "monto"){
        console.log(`Accediendo a la propiedad: ${property}`)
        }
        return target[property]
    },
    set (target,property,value){
        if(property === "monto" ){
        console.log(`Modificando la propiedad: ${property}`)
        }
        target[property]=value
        return true
    }
}


const cuenta = new Proxy(new BankAccount("Dimitri",500),cuentaBancaria)


cuenta.depositar(200)
cuenta.retirar(700)
cuenta.depositar(100)


console.log("---------------------------------------------------")



class infoAge{
    constructor(name,yearAge,day){
        if(infoAge.instance){
            return infoAge.instance
        }
        this.name=name;
        this.yearAge=yearAge;
        this.day=day;
        infoAge.instance=this
    }
}


const person1 = new infoAge("Dimitri",2000,25)

const person2 = new infoAge("Ana",1995,15)

console.log(person1)
console.log(person2)


