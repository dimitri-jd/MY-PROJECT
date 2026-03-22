//cre una funcion que utilice error correctamente

console.time("medir tiempo")
function ingreso (name, contraseña){

    if(contraseña.length<=3){
        console.error("ha ocurrido un ",new Error("la contraseña es muy corta")
        )
    }if(name.length<5){
         return console.warn("el nomre debe tener 5 caracteres")
    }

console.info("la informacion ha sido guardada, debera esperar 90 para cambiarla")

return console.log(`nombre:${name},contraseña:${contraseña}`)
}

ingreso("dimirix", "juadasdfs")

console.timeEnd("medir tiempo")

let table=[
    {usuario:"dimtri",kills:28},
    {usuario:"juan",kills:1}
]

console.table(table)


console.group("Preregistro:")
console.group("juan:dimitri")
console.group("fulanito:attata")
console.group("fenix:realpe")
console.groupEnd


let num=1.1

console.assert(num>0, "el numero no es positivo")

console.count("dimitri")


console.trace()

console.clear()