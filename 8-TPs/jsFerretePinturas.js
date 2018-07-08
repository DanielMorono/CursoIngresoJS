/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var grados;
    grados=document.getElementById("Temperatura").value;
    var resultado;
    resultado= (grados-32)* 5/9;
    alert(grados+" Fahrenheit son "+resultado+" centígrados");
}

function CentigradosFahrenheit () 
{
	var grados;
    grados=document.getElementById("Temperatura").value;
    var resultado;
    resultado= (grados*1.8)+32;
    alert(grados+" Centigrados son "+resultado+" Fahrenheir");
}
