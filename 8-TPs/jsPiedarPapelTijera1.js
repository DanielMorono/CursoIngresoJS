/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
    eleccionMaquina = Math.floor(Math.random()*(4-1)+1);
    if (eleccionMaquina == 1) {
        eleccionMaquina = "piedra";
    } else if (eleccionMaquina == 2) {
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
    alert ("Empate");
}
else if (eleccionMaquina == "tijera") {
    alert ("Gano");
}
else {
    alert ("Perdio");
}

}//FIN DE LA FUNCIÓN
function papel()
{
    if (eleccionMaquina == "piedra"){
        alert ("Ganas");
    }
    else if (eleccionMaquina == "tijera") {
        alert ("Perdio");
    }
    else {
        alert ("Empate");
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == "piedra"){
        alert ("Perdio");
    }
    else if (eleccionMaquina == "tijera") {
        alert ("Empate");
    }
    else {
        alert ("Gano");
    }

}//FIN DE LA FUNCIÓN