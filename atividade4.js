var temperatura = 40;
var tipoTemperatura = "F";
var temperaturaConvertida;

if(tipoTemperatura == "C") {
    console.log("Você escolheu Celsius!")
    temperaturaConvertida = ((temperatura * 1.8) + 32);
} else {
    console.log("Você escolheu Farenheit!")
    temperaturaConvertida = ((temperatura - 32) * 5 / 9);
}

console.log("O valor convertido é: ", temperaturaConvertida)