Productos finales - Cifrado César
Instrucciones
Crear una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César, con el parámetro de desplazamiento de 33 espacio hacia la derecha

Consideraciones específicas
1. El programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: ( x - n ) % 26
2. El código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher.
3. El usuario no debe poder ingresar un campo vacío o que contenga números.


Desarrollo del código
Para que la palabra que el usuario ingresa sea válida, inicializo mi ejercicio con una fórmula que me dice que el texto es texto y no números(buscada en MDN var textoEsTexto = /^[a-zA-Z]*$/)

Función Inicial
Preguntar al usuario si lo que quiere es cifrar o descifrar su mensaje
1 cifrar 
2 descifrar
En primer lugar, debemos constatar que el mensaje que nos entregue el usuario sea válido, para esto, verificaremos dos cosas
1- Que el mensaje no esté vacío o contenga espacios
2- Que el mensaje no contenga números (fórmula puesta al inicio del ejercicio).

Comprobando estos dos puntos, sin vacíos y sin números, podemos hacer nuestras dos funciones cipher y decipher.

Función Cipher
En la función cifrar, verificaremos que el mensaje sea válido nuevamente, o sea, que no esté vacío y que no contenga números.
Luego de esto, necesitamos recorrer la frase y para esto usaremos un for. Dentro de este for, colocaremos una variable que calcule el valor de cada caracter en código

Función Decipher
En la función descifrar, verificaremos que el mensaje sea válido nuevamente, o sea, que no esté vacío y que no contenga números.
Luego de esto, necesitamos recorrer la frase y para esto usaremos un for. Dentro de este for, colocaremos una variable que calcule el valor de cada caracter en código





