function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    var preInvierno = "Falta para el invierno";
    var invierno = "Abrigate que hace frio";
    var postInvierno = "Ya pasamos el frio, ahora calor!!!";

    switch (mesDelAño) 
    {
        case "Enero" :
        {
            alert (preInvierno);
            break;
        }
        case "Febrero" :
        {
            alert (preInvierno);
            break;
        }
        case "Marzo" :
        {
            alert (preInvierno);
            break;
        }
        case "Abril" :
        {
            alert (preInvierno);
            break;
        }
        case "Mayo" :
        {
            alert (preInvierno);
            break;
        }
        case "Junio" :
        {
            alert (preInvierno);
            break;
        }
        case "Julio" :
        {
            alert (invierno);
            break;
        }
        case "Agosto" :
        {
            alert (invierno);
            break;
        }
        case "Septiembre" :
        {
            alert (postInvierno);
            break;
        }
        case "Octubre" :
        {
            alert (postInvierno);
            break;
        }
        case "Noviembre" :
        {
            alert (postInvierno);
            break;
        }
        case "Diciembre" :
        {
            alert (postInvierno);
            break;
        }
    }
}//FIN DE LA FUNCIÓN