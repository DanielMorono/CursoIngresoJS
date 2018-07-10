function mostrar()
{
var precio;
var descuento;
var descuentoDinero;
var precioConDescuento;
var iva;
var resultadoFinal;
    precio=prompt("Ingrese el precio ");
    descuento=prompt("Ingrese el descuento: ");
    precio=parseInt(precio);
    descuento=parseInt(descuento);
    descuentoDinero= (precio *descuento)/100;
    precioConDescuento= precio - descuentoDinero;
    iva = (precio*21)/100;
    resultadoFinal= precioConDescuento+iva;
    alert("Se le descuentan "+descuentoDinero+",el precio con descuento es "+precioConDescuento+" y el IVA es "+iva);
    document.getElementById("elPrecioFinal").value=resultadoFinal;
}
 