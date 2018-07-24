var eleccionMaquina;
var contadorDeEmpates=0;
var contadorDeGanadas=0;
var contadorDePerdidas=0;
var empates;
var ganadas;
var perdidas;

function comenzar()
{	 	
	eleccionMaquina = Math.floor(Math.random()*(4-1)+1);
	if (eleccionMaquina == 1){
		eleccionMaquina = "piedra";
	}
	else if (eleccionMaquina == 2){
		eleccionMaquina = "papel";
	}
	else {
		eleccionMaquina = "tijera";
	}
	console.log (eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina == "piedra"){
		empates = contadorDeEmpates += 1;
		alert ("Empato");
		document.getElementById("empatadas").value = empates;
	}
	else if (eleccionMaquina == "papel"){
		perdidas = contadorDePerdidas +=1;
		alert ("Perdio");
		document.getElementById("perdidas").value= perdidas;
	}
	else {
		ganadas = contadorDeGanadas +=1;
		alert ("Gano");
		document.getElementById("ganadas").value = ganadas;
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina == "piedra"){
		ganadas = contadorDeGanadas += 1;
		alert ("Gano");
		document.getElementById("ganadas").value = ganadas;
	}
	else if (eleccionMaquina == "papel"){
		empates = contadorDeEmpates +=1;
		alert ("Empato");
		document.getElementById("empatadas").value = empates;
	}
	else {
		perdidas = contadorDePerdidas +=1;
		alert ("Perdio");
		document.getElementById("perdidas").value = perdidas;
	}
}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == "piedra"){
		perdidas = contadorDePerdidas += 1;
		alert ("Perdio");
		document.getElementById("perdidas").value= perdidas;
	}
	else if (eleccionMaquina == "papel"){
		ganadas = contadorDeGanadas +=1;
		alert ("Gano");
		document.getElementById("ganadas").value = ganadas;
	}
	else {
		empates = contadorDeEmpates +=1;
		alert ("Empato");
		document.getElementById("empatadas").value = empates;
	}
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}