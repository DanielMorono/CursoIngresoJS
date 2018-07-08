function mostrar()
{
//tomo la edad  
  var edad;
    edad=document.getElementById("edad").value;
    if (edad >= 18) {
        alert("Su edad es "+ edad+", es mayor de edad.");
    } else {
        alert("su edad es "+edad+", no es mayor de edad.");
}

}//FIN DE LA FUNCIÓN