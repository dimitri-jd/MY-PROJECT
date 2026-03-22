//dado un array de numros , usa un bucle para crear un nuevo array que contenga solo los nuemros mayores a 10


let numeros = [3,43,6,8,7,2,46,52,11,12]

let numerosm= []
for(let n=0; n<numeros.length;n++){

    
    if(numeros[n]>10){
        numerosm.push(numeros[n])

    }
        
}

  console.log(numerosm)


let num=[3,5,87,43,1,7,9,12,54,76,40]
let mayores=[]

  for(let mayor of num){

if( mayor>10){
    mayores.push(mayor)
}

  }
  console.log(mayores)





  let suma= 0
  let i= 1


  while( i<=100){

suma= suma+i
i++

  }
  console.log(suma)






let nume=[5, 12, 8, 25, 4, 30 ,6,7,9]

let contador=0
let  x=0

while(x <nume.length){

if(nume[x]>10){
    contador++
}
x++
}

console.log(contador)
