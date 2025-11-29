class Persona{
    #edad
    constructor (nombre,edad){
        this._nombre=nombre
        this.#edad=edad
    }

    saludar(){
        console.log(`Bienvenido${this._nombre}`)
    }

    esMayorDeEdad(){
        if(this.#edad>=18){
            return true
        }else{
        return false
        }
    }
    get getEdad(){
        return this.#edad
    }

    set nombreN(nuevoNombre){
        if(nuevoNombre.length<2){
            console.log("el nombre es muy corto")
        }else{
            return this._nombre=nuevoNombre
        }

    }

    get getNombre(){
        return this._nombre.toUpperCase()
    }
    static esHumano(){
        return true
    }
}


class Estudiante extends Persona{

    constructor (nombre,edad,curso){
        super(nombre,edad)
    this.curso=curso
    }

    info(){
        console.log(`nombre: ${this.getNombre}, curso: ${this.curso}`)
    }

}

class Profesor extends Persona{
    constructor(nombre,edad,materia){
        super(nombre,edad)
        this.materia=materia
    }

    dictarClase(){
        console.log(`el profesor ${this.getNombre} enseña ${this.materia}`)
    }
}

let  estudiante1= new Estudiante("juan", 19, "Matemáticas")
estudiante1.info()
estudiante1.esMayorDeEdad()