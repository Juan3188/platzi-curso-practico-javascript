// const precioOriginal = 100;
// const descuento = 15;


function calcularPrecioConDescuento(precio, descuento) {
    const procentajePreciosConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePreciosConDescuento) / 100;

    return precioConDescuento;
}


function onClickButonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    const resultP = document.getElementById("resultPrice");

    resultP.innerText = "El precio con descuento: $" + precioConDescuento;
}