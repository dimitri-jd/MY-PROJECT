//loops o bucles


//for

for(let i=0; i<=5;i++){
    console.log(`hola ${i}`)
}



const numbers = [1,2,3,4,5,6,7,8]


for(let i=0; i<numbers.length ;i++){
    console.log(`elemento: ${numbers[i]}`)
}



//while

let i=0
while(i<5){
     console.log(`hola ${i}`) 
     i++
}


//bucle infintio
//while(true){}


//do while

i=6

do{
     console.log(`hola ${i}`)
     i++
}while( i< 5)


//for of

myArray= [1,2,3,4]

myset= new Set(["juan","david","escobar",false,1, "juandavidescobarQgmail.com"])

myMap= new Map([
    ["name","juan"],
    ["email","juandavidescobar@1283"],
    ["age",19]
])


myString= "hola javascript"




for(let valor of myArray ){
    console.log(valor)
}



for(let valor of myset ){
    console.log(valor)
}


for(let valor of myMap ){
    console.log(valor)
}


for(let valor of myString ){
    console.log(valor)
}


//buenas practicas
//break continue


for(let i=0; i<10;i++){
    if(i==5){
        continue
    }else if(i==6){
        break
    }
    console.log(`hola ${i}`)
}