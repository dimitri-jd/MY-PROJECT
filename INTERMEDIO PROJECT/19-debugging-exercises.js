function calcularPromedio(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) { 
        suma += numeros[i]; 
    }

    return suma / numeros.length;
}

const lista = [10, 20, 30, 40];
const resultado = calcularPromedio(lista);

console.log("Promedio:", resultado);
