/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
    edad=document.getElementById("laEdad");
    nombre=document.getElementById("elNombre");
    alert("Usted se llama "+ document.getElementById("elNombre").value +" y tiene "+ document.getElementById("laEdad").value +" años.");
}

