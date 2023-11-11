/* Ejercicio:
Crea una función llamada operacionMatematica que tome dos números y una función de retorno de llamada. La función debe aplicar la función de retorno de llamada a los dos números y devolver el resultado.

Define al menos dos funciones de retorno de llamada, como sumar, que suma dos números, y multiplicar, que multiplica dos números. Luego, llama a operacionMatematica con diferentes números y funciones de retorno de llamada.

Intenta realizar este ejercicio y comparte tu solución cuando estés listo. ¡Estoy aquí para ayudar si tienes alguna pregunta! */

function operacionMatematica (num1,num2, fnCallback) { 
    return fnCallback(num1,num2); 
}

let sumar = (a,b) => a + b

let multiplicar = (a,b) => a * b
