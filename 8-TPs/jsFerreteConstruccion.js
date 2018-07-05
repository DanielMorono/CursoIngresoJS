/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var resultado;
    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    resultado= [(largo*2)+(ancho*2)]*3;
    alert("Se debe comprar "+resultado+" de alambre para dar tres vueltas al terreno");

}
function Circulo () // 2 x PI x radio (perimetro de circulo)
{
	var radio;
    var resultado;
    var numeroPi = Math.PI;
    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);
    resultado=parseInt( [(numeroPi *2) * radio]*3);//usar parseInt para sacar decimales
    alert("Se debe comprar "+resultado+" de alambre para dar tres vueltas al terreno");

}
function Materiales () 
{
	var largo;
    var ancho;
    var perimetro;
    var cemento;
    var cal;
    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    //cada 4m de perimetro 2 bolsas de cemento y 3 de cal
    perimetro=(largo*2)+(ancho*2);
    cemento= (perimetro*2)/4;
    cal= (perimetro*3)/4;
    alert("Se necesitan "+ cemento+" bolsas de cemento y "+cal+" de cal para su terreno")

}