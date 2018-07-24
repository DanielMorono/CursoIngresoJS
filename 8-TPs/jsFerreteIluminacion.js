/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var precioLampara = 35;
    var resultado;
    var marca;
    marca = document.getElementById("Marca").value;
    cantidad = document.getElementById("Cantidad").value;
    resultado = cantidad * precioLampara;
    cantidad=parseInt(cantidad);
    var iibb = (resultado *10) / 100;
    Math.floor(document.getElementById("precioDescuento").value);

    if (cantidad >= 6) {
        document.getElementById("precioDescuento").value = resultado- (resultado*50)/100;
    }
    else {
        if (cantidad == 5 && (marca == "ArgentinaLuz")) {
        document.getElementById("precioDescuento").value = resultado - (resultado * 40) / 100;} 
        else {
            if (cantidad == 5 && (marca != "ArgentinaLuz")) {
               document.getElementById("precioDescuento").value = resultado - (resultado *30) /100; }
            else {
                    if (cantidad == 4 && (marca == "FelipeLamparas" || marca == "ArgentinaLuz")) {
                    document.getElementById("precioDescuento").value = resultado - (resultado * 25) / 100;}   
                    else {
                        if (cantidad == 4 && (marca != "FelipeLamparas"|| marca != "ArgentinaLuz")) {
                            document.getElementById("precioDescuento").value = resultado - (resultado * 20) / 100;}
                        else {
                            if (cantidad == 3 && (marca =="ArgentinaLuz")) {
                                document.getElementById("precioDescuento").value=resultado - (resultado *15) / 100;
                        }   else {
                                if (cantidad == 3 && (marca =="FelipeLamparas")) {
                                    document.getElementById("precioDescuento").value=resultado - (resultado *10) / 100;
                            }   else {
                                    if (cantidad == 3 && (marca != "ArgentinaLuz" || marca !="FelipeLamparas")) {
                                        document.getElementById("precioDescuento").value=resultado - (resultado *5) / 100;
                                }   else {
                                        document.getElementById("precioDescuento").value=resultado;     
                                } 
                            }
                        }
                    }             
                }
            }
        }
    }
        if (document.getElementById("precioDescuento").value > 120) {
        document.getElementById("precioDescuento").value= final + iibb;
        alert("Uste pago "+ iibb + " de Ingresos Brutos"); }
}
