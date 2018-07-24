function mostrar()
{

	var contador=0;
	var numero;
	var max;
	var min;
	var respuesta='si';
	var bandera = true;

	while(respuesta!='no')
	{
		contador ++;
		numero = prompt ("Ingrese un numero");
		numero = parseInt(numero);
		if (bandera == true) {
			bandera = false;
			max = numero;
			min = numero;
	} 
	 if (numero > max){
			max = numero;
		  }
	 if (numero < min) {
			  min = numero;
		  }
		  respuesta= prompt ("Desea seguir? (si/no)");
	}

		document.getElementById("maximo").value = max;
		document.getElementById("minimo").value = min;
	




}//FIN DE LA FUNCIÓN