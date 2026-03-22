//! 1- crea una redex que valide correos electronicos.

const emailRegex = /@gmail.com/

const  textEmail = "juandavid@gmail.com"

console.log(emailRegex.test(textEmail)) // true

if(emailRegex.test(textEmail) === true){
    console.log("El correo es valido")
}else{
    throw new Error("El correo no es valido") 
}


//! 2-  crea una regex que obtenga hastags de un texto.

const hashtagRegex = /#[a-zA-Z0-9_]+/g
const textWithHashtags = "Me encanta #JavaScript y #NodeJS para el desarrollo web. #100DaysOfCode"

const hashtags = textWithHashtags.match(hashtagRegex)
console.log("Hashtags encontrados:", hashtags)



//! 3- crea una regex que valide contraseñas segueras (minimo 8 caraateres, almenos una letra y un numero)

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const password = "Secur51"

if(passwordRegex.test(password)=== true){
    console.log("La contraseña es segura")
}else{
    throw new Error("La contraseña no es segura")
}
