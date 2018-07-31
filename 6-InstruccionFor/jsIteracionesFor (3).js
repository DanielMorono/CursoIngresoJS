function mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");
repeticiones=parseInt(repeticiones);
while (isNaN(repeticiones)){
    var repeticiones = prompt("ingrese el número de repeticiones");
    repeticiones=parseInt(repeticiones);
}
for (;repeticiones > 0; repeticiones--){
    alert("Hola UTN FRA");
}


}//FIN DE LA FUNCIÓN