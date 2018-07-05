/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numeroA;
var numeroB;
var resultado;
numeroA=document.getElementById("numeroUno").value;
numeroB=document.getElementById("numeroDos").value;
numeroA=parseInt(numeroA);//Asi se usa el parseInt
numeroB=parseInt(numeroB);
resultado=numeroA+numeroB;
alert("La suma es : "+ resultado);
}
//confirm
