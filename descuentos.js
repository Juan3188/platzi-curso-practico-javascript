// const precioOriginal = 100;
// const descuento = 15;


function calcularPrecioConDescuento(precio, descuento) {
    const procentajePreciosConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePreciosConDescuento) / 100;

    return precioConDescuento;
}


