//crea una clase que reciba dos propiedades 


class MyInfo {
     constructor(name,jobi){
        this.name=name
        this.jobi=jobi
    }

     contex(){
        console.log(`su nombre es ${this.name} y le gusta ${this.jobi}`)
    }

    static direc(direccion,typeofhouse){
        return (`vive en ${direccion} y es un ${typeofhouse}`)

    }
}

let myinfo2= new MyInfo("juan", "jugar juegos")
console.log(myinfo2)
myinfo2.contex()
console.log(MyInfo.direc("cra81-42-72", "apartamento"))


class Person extends MyInfo{

    time(){
        console.log("tiene disponibilidad de tiempo")
    }

}
let personAdop= new Person("dimitri", "trabajar")
personAdop.contex()
personAdop.time()


class GetInfo extends MyInfo {
    #Numcuenta
    constructor(name,jobi,id,typeID,Numcuenta){
        super(name,jobi)
    this.id=id
    this.typeID=typeID
    this.#Numcuenta=Numcuenta

    }
     get Numcuenta(){
            return this.#Numcuenta
        }

        set Numcuenta(Newnumcount){
            this.#Numcuenta=Newnumcount
        }
        contex(){
            console.log(`la perosn con el nombre de: ${this.name} , ${this.jobi}, registrada con la ${this.typeID}:${this.id}, es apta para adoptar una mascota`)

        }

}

let infoperson=new GetInfo("sara","estudia",987643,"cedula","123-123-345")
console.log(infoperson)
infoperson.contex()

//console.log(infoperson.Numcuenta)

infoperson.Numcuenta=
console.log(infoperson.Numcuenta)