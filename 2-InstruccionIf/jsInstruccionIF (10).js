function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota = parseInt(Math.random()*11-1)+1;
	
	if (nota >=9) {
		alert("Su nota es "+nota+", EXCELENTE.");
	} else {
		if (nota >=4) {
			alert("Su nota es "+nota+",APROBÓ.");
		}
		else {
			alert("Su nota es "+nota+ ". Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN