function mostrar()
{
//tomo la edad  
   /* var edad;
    edad = document.getElementById("edad").value;
    if (edad >=18) {
        alert("Usted es mayor de edad.");
    } else if (edad >= 13 && edad <= 17) {
        alert("Usted es adolescente.");
    }
    else {
        alert("Usted es un niño.");
}
NO HACERLO ASI(Aunque funcione), por ahora*/
    var edad;
    edad = document.getElementById("edad").value;
    if (edad >=18) {
        alert("Usted es mayor de edad.");
    }
    else{
            if(edad<=13){
                alert("Usted es un niño.");
            }
            else {
                alert("Usted es un adolescente");
        }
        }

}//FIN DE LA FUNCIÓN