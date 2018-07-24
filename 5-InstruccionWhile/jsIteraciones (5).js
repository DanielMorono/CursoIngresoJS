function mostrar()
{

var sexo = prompt("ingrese f ó m .");
    while (sexo != "f" && sexo != "m") {
     sexo = prompt("ingrese f ó m .");
    }

document.getElementById('Sexo').value=sexo;
// sexo.toLocaleLowerCase para que compare tanto minusculas como mayusculas
}//FIN DE LA FUNCIÓN