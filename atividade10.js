var dia = 29;
var mes = 2;
var ano = 30;

if (ano >= 1) {
    console.log("Ano válido.")
  if (mes <= 12) {
    console.log("Mês válido")
    if (mes == 2) {
      if (dia > 28) {
        console.log(
          "A sua data é inválida pois só existem 28 dias no mês de fevereiro.",
        );
      } else {
        console.log("Quantidade válida de dias!")
      }
    }
  } else {
    console.log("Sua data não é válida pois só existem 12 meses.");
  }
} else {
  console.log("A sua data não é valida pois os anos começam de 1 em diante.");
}
