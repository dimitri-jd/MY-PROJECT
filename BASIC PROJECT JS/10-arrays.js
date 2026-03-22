// array 

// Decalracion


let myArray = []

let myArray2 = new Array()




console.log(myArray)
console.log(myArray2)

// inicializacion


myArray= [3]
myArray2 = new Array(3)


console.log(myArray)
console.log(myArray2)





myArray= [1,2,3,4]
myArray2 = new Array(1,2,3,4)


console.log(myArray)
console.log(myArray2)



myArray= ["juan","david","escobar",false]
myArray2 = new Array("juan",1,"escobar","zuniga")


console.log(myArray)
console.log(myArray2)



myArray2=new Array (3)
myArray2[1]=" juan"
//myArray2[2]="david"
myArray2[0]="escobar"
myArray2[5]="escobar"
console.log(myArray2)




myArray=[]

myArray[1]=" juan"
//myArray[2]="david"
myArray[0]="escobar"

console.log(myArray)



//metodos comunes


myArray=[]

// push y pop ( )


myArray.push ("juan")
myArray.push ("david")
myArray.push ("escobar")
myArray.push (27)



console.log(myArray)
console.log( myArray.pop())// elimina el ultimo y lo devuelve
myArray.pop()

console.log(myArray)



// shift y unshift ( quita el primer elemento del array y se puede agregar mas )


console.log(myArray.shift())
console.log(myArray)

myArray.unshift("juan","escobar")
console.log(myArray)

//length



myArray.length

console.log(myArray.length)


//clear


myArray =[]

console.log(myArray)



// slice


myArray=["juan","david","escobar",false,1]

let mynewArray= myArray.slice(1,3)


console.log(myArray)
console.log(mynewArray)



// splice


myArray.splice(1,3)
console.log(myArray)





myArray=["juan","david","escobar",false,1]



myArray.splice(1,2,"nueva entrada")
console.log(myArray)






















