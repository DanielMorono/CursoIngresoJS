function mostrar()
{

	var contador=0;
	var numero;
	var sumaNegativos=0;
	var suma = 0;
	var producto= 1;
	var respuesta="si";
	var contadorPositivos=0;
	var contadorNegativo=0;
	var contadorDeCeros=0;
	var contadorPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var mensaje;

	while(respuesta!="no")
	{
		contador ++
		numero = prompt ("Ingrese un numero");
		numero = parseInt(numero);
		while (isNaN(numero)) {
		numero = prompt ("Ingrese un numero");
		numero = parseInt(numero);
		}
		if (numero < 0) {
			sumaNegativos += numero;
			contadorNegativos ++
		} else if (numero >0){
			suma += numero;
			contadorPositivos ++
		}
		else {
			contadorDeCeros ++
		}
		if (numero %2 == 0){
			contadorPares ++
		}
		promedioPositivos=suma/contadorPositivos;
		promedioNegativos=sumaNegativos/contadorNegativo;
		diferencia = contadorPositivo-contadorNegativo;
		if (diferencia > 0) {
			mensaje="Hay mas positivos"
		} else if (diferencia == 0){
			mensaje= "Hay la misma cantidad" + diferencia;
			}	else {
				mensaje= "Hay mas negativos" + (diferencia * -1);
			}
		


respuesta =prompt("Desea seguir? (si/no)");

	
	}
	//document.write("Hola");




}//FIN DE LA FUNCIÓN