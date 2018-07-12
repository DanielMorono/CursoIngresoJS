/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto= Math.floor(Math.random()*(101-1)+1);
var contadorIntentos= 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random()*(101-1)+1);
	contadorIntentos = 0;
	console.log (numeroSecreto);
	

}

function verificar()
{
	var intento;
	var numeroDeIntentos;
	intento = document.getElementById("numero").value;
	intento=parseInt(intento);
	numeroDeIntentos=contadorIntentos+=1;
	if (intento == numeroSecreto && (numeroDeIntentos == 1)) {
		alert ("Usted es un Psíquico");
	} else if (intento == numeroSecreto && (numeroDeIntentos == 2)){
		alert ("Excelente percepción");
	}
		else if (intento == numeroSecreto && (numeroDeIntentos == 3)) {
			alert ("Esto es suerte");
		}
		else if (intento == numeroSecreto && (numeroDeIntentoss == 4)) {
			alert ("Excelente técnica");
		}
		else if (intento == numeroSecreto && (numeroDeIntentos == 5)){
			alert ("Usted está en la media");
		}
		else if (intento == numeroSecreto && [(numeroDeIntentos >= 6) && (numeroDeIntentos <= 10)]) {
			alert ("Falta técnica");
		}
		else if(intento == numeroSecreto && (numeroDeIntentos >10)){
			alert ("Afortunado en el amor!!");
		}
	

}