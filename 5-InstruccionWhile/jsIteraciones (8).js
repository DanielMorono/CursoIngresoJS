function mostrar()
{

	var contador=0;
	var respuesta='si';
	var numero;
	var suma = 0;
	var multiplicacion= -1;

	while (respuesta == "si") {
		contador ++;
		numero = prompt ("Ingrese un numero");
		numero =parseInt(numero);
		if (numero >= 0) {
			suma += numero;
		} else {
			multiplicacion *= numero;
		}
		respuesta = prompt ("Desea seguir? (si/no)");
	}


document.getElementById('suma').value=suma;
document.getElementById('producto').value=multiplicacion;

}//FIN DE LA FUNCIÓN