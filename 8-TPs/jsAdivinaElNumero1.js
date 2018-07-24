/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto=Math.floor(Math.random()*(101-1)+1);
var contadorIntentos=0;
var numeroDeIntentos;
var numero

function comenzar()
{
  numeroSecreto=Math.floor(Math.random()*(101-1)+1);
  console.log (numeroSecreto);
  contadorIntentos = 0;
}

function verificar()
{
  numero = document.getElementById("numero").value;
  numeroDeIntentos = contadorIntentos +=1;
  document.getElementById("intentos").value = numeroDeIntentos;
  if (numeroSecreto == numero) {
    alert ("Usted es un ganador!!! y en solo " + numeroDeIntentos + " intentos");
  } else if (numero < numeroSecreto) {
    alert ("Falta...");
  }
    else {
      alert ("Se paso...");
    }
  /*
Contadores = Una variable + una constante Cont=cont +1;
Acumuladores = es una variable + una variable
Banderas = variable booleana
  */
}