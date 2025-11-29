//importacion de modulos

import { add,PI,name,Cricle } from "./28-export-modules.mjs";

import resta from "./28-export-modules.mjs";

//fuinciones

add(5,10)
//propiedades


console.log(PI)
console.log(name)
//classes

let cricle =new Cricle (10)
console.log(cricle.radius)
console.log(cricle.area().toFixed(2))
console.log(cricle.perimeter().toFixed(2))

//exportacion por defecto

console.log(resta(1,7))