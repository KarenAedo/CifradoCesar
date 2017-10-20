
//Para que la palabra que el usuario ingresa sea válida, inicializo mi ejercicio con una fórmula que me dice que el texto es texto y no números(buscada en MDN)
var textoEsTexto = /^[a-zA-Z]*$/;
//Frase de bienvenida y verificación de la opción cifrado o descifrado
Function inicio(miPregunta){
	
	//utilizo el bucle do while, porque el promt se desplegará hasta que el usuario introduzca una respuesta válida.
	do{ te
		//le indico al usuario que debe ingresar 1 para cifrar su texto y 2 para decifrar, de esto depende cuál función se ejecutará después
		var miPregunta = prompt("¡Bienvenido! Para cifrar ingrese 1 - Para decifrar ingrese 2");
		
			//necesito que el usuario introduzca una respuesta que no sea un espacio vacío.
			if(miPregunta == "") {
				//si el usuario ingresa "1", la función lo dirige inmediatamente a la función cipher(cifrar la palabra).
				if(miPregunta == "1"){
				cipher()
			
			//en cambio, si la respuesta del usuario es "2", la función lo dirige a la función decipher(decifrar la palabra).
			}else if(miPregunta == "2"){
				decipher()
			
			//si el usuario no ingresa una respuesta válida, se alerta con una nueva ventana sobre su error.
			}else {
				alert ("¡Debe ingresar una frase válida!")

			}
				
				}

					}
	//termino mi función con un while, porque necesito que el do se detenga cuando la condición se fuel
	while(miPregunta =="" || miPregunta !="1" && miPregunta !="2")
	
	}					 


//Para ejecutar ambas respuestas, necesito de dos nuevas funciones
//Para ejecutar la respuesta n°1 de cifrado, debo construir una nueva función cipher, que permita cifrar la palabra que el usuario ingrese.
function cipher
	
	//se debe verificar que el mensaje sea válido, que no esté vacío y que no contenga números
	//aquí va una fórmula encontrada en mdn

	//se hace un arreglo vacío para poder guardar la cadena cifrada
	var cipherStr = []
	
	//hacemos un for para poder recorrer la frase
	for(var i = 0; i<str.length; i++ )

		//necesito saber si la frase ingresada es mayúscula o minúscula, porque para cada caso, existe una diferente numeración en el código "ascii"
		//para esto, construyo un if
		// si la frase es mayúscula
		if(str[i] === str[i].toUpperCase()){  //acá adentro va el código "ascii" para mayúscula

		
		// si la frase es minúscula
		}else if(srt [i] === str[i].toLowerCase){ //acá adentro va el código "ascii" para minúscula

		}


//retornar con alert la frase cifrada

//Para ejecutar la respuessta n°2 de descifrado, debo construir una nueva función decipher, que permita descifrar la palabra que el usuario ingrese.
function decipher
//se debe verificar que el mensaje sea válido, que no esté vacío y que no contenga números
	//aquí va una fórmula encontrada en mdn

	//se hace un arreglo vacío para poder guardar la cadena cifrada
	var cipherStr = []
	
	//hacemos un for para poder recorrer la frase
	for(var i = 0; i<str.length; i++ )

		//necesito saber si la frase ingresada es mayúscula o minúscula, porque para cada caso, existe una diferente numeración en el código "ascii"
		//para esto, construyo un if
		// si la frase es mayúscula
		if(str[i] === str[i].toUpperCase()){  //acá adentro va el código "ascii" para mayúscula

		
		// si la frase es minúscula
		}else if(srt [i] === str[i].toLowerCase){ //acá adentro va el código "ascii" para minúscula

		}


//retornar con alert la frase cifrada
	
	
		
		

				

				