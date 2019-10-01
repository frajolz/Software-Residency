//input de valor inicial
var numero = prompt("Informe o valor desejado (R$ XXXX, XX): ");
numero = Number(numero);

//Comço do script para contagem de notas
var notasCem = testaNota(100);

//Obs.: conta para deduzir do valor inicial o valor em notas e acrescentar o resto

numero = subtraiNotas(numero, 100, notasCem);


//console.log("\nValor atual do numero: " + numero);

var notasCinquenta = testaNota(50);

numero = subtraiNotas(numero, 50, notasCinquenta);

//console.log("\nValor atual do numero: " + numero);

var notasDez = testaNota(10);
numero = subtraiNotas(numero, 10, notasDez);

//console.log("\nValor atual do numero: " + numero);

var notasCinco = testaNota(5);
numero = subtraiNotas(numero, 5, notasCinco);

var centavos = numero - Math.floor(numero);

var notasUm = numero;

//console.log("\nValor atual do numero: " + numero);

if (notasCem > 0) {
    console.log("\nNúmero de notas de R$ 100,00: " + Math.floor(notasCem));
}

if (notasCinquenta > 0) {
    console.log("\nNúmero de notas de R$ 50,00: " + Math.floor(notasCinquenta));
}

if (notasDez > 0) {
    console.log("\nNúmero de notas de R$ 10,00: " + Math.floor(notasDez));
}

if (notasCinco > 0) {
    console.log("\nNúmero de notas de R$ 5,00: " + Math.floor(notasCinco));
}

if (notasUm > 0) {
    console.log("\nNúmero de notas de R$ 1,00: " + Math.floor(notasUm));
}


console.log("\nNúmero de centavos restantes: R$ " + centavos.toFixed(2));

function testaNota(valorNota) {
    var notas = numero / valorNota;
    return notas;
}

function subtraiNotas(numero, valorNota, tipoNota) {
    numero = numero - tipoNota * valorNota + numero % valorNota;
    return numero;
}