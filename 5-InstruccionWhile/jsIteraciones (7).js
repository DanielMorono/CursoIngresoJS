function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var suma = 0;
	var promedio;

	while (respuesta == "si") {
		contador ++
		numero = prompt ("Ingrese numero");
		numero = parseInt(numero);
		suma += numero; 
		respuesta = prompt ("Quiere seguir?")
	}
	promedio = suma / contador;
document.getElementById('suma').value=suma;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN