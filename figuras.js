// Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado =  5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd()

// Codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo1 =  6;
// const ladoTriangulo2 =  6;
// const baseTriangulo =  4;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo =  5.5;
// console.log("la altura del triandulo es de: " + alturaTriangulo+ "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}
// console.log("El perimetro del trianguloo es: " + perimetroTriangulo + "cm");

// Triangulo Isosceles

function alturaTrianguloIsosceles(lado1, lado2, base) {
    if (lado1 === lado2) {
        const ladoAlCuadrado = lado1 * lado2
        const baseAlCuadrado = base * base
        const alturaIsosceles = Math.sqrt(ladoAlCuadrado - (baseAlCuadrado / 4 ));
        return alturaIsosceles;        
    } else {
        alert("No es un triangulo isosceles")
    }
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd()

// Codigo del circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del Circulo es: " + radioCirculo+ "cm");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del Circulo es: " + diametroCirculo + "cm");

// Pi
const PI = Math.PI;
// console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro =  diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El diametro del Circulo es: " + perimetroCirculo + "cm");

// Area 
function areaCirculo(radio) {
    return (radio * radio) * PI
}
// console.log("El area del Circulo es: " + areaCirculo + "cm2");

console.groupEnd()

function calcularPerimetroCuadrado() {
   const input = document.getElementById("inputCuadrado");
   const value = input.value;
   const perimetro =  perimetroCuadrado(value);
   alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area =  areaCuadrado(value);
    alert(area);
}