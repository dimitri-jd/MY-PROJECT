class Usuario{
    #id
constructor(id,nombre,email){
    this._nombre=nombre
    this.#id=id
    this._email=email
    }
    mostrarInfo(){
        console.log(`Usuario:${this._nombre}, Email:${this._email}`)
    }

get email(){
    return this._email
}

set email(newEmail){
    if(newEmail.includes("@")){
        this._email=newEmail
    }else{
        console.log("email invalido")
    }
}
}
let user =new Usuario(1233123,"juandavid","juandavid@gmail")

console.log(user.email)
user.email="dimitri@gmail.com"
user.mostrarInfo()



class Admin extends Usuario{
    constructor(id,nombre,email,permisos){
    super(id,nombre,email)
    this._permisos=permisos
    }

    mostrarPermisos(){
       console.log("Permisos:", this._permisos.join(", "));
    }

    agregarPermiso(permiso){
        if(this._permisos.includes(permiso)){
            console.log("El permiso ya existe")
        }else{
            this._permisos.push(permiso)
        }
    }

    get permisos(){
        return this._permisos
    }

    set permisos(realarray){
        if(Array.isArray(realarray)){
            this._permisos=realarray
        }else{
            console.log("El valor asignado no es un arreglo válido de permisos")
        }


    }

}
let admin1=new Admin(12343567,"escobar","escobar@gmail.com",["crear","editar","eliminar"])
admin1.mostrarInfo()
admin1.mostrarPermisos()
admin1.agregarPermiso("grabar")
admin1.mostrarPermisos()
admin1.permisos=["Gestinar","crear"]
admin1.mostrarPermisos()
console.log(admin1.permisos)