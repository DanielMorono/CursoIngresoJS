function mostrar()
{

	var contador=0;
	var numero;
	var acumulador=0;
	var suma= 0;
	var promedio;
	while (contador < 5) {
		contador ++
		numero = prompt ("Ingrese numero");
		numero=parseInt(numero);
		suma=suma+numero;
	}
	promedio=suma/5
document.getElementById('suma').value=suma;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN