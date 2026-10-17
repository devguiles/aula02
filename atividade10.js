var dia = 30;
var mes = 13;
var ano = 2002;

if (ano >= 1) {
  if (ano > 2026) {
    console.log("O ano selecionado é inválido.");
  } else {
    console.log("O ano selecionado é válido.");
  }

  if (mes >= 1) {
    if (mes > 12) {
      console.log("O mês selecionado é inválido.");
    } else {
      console.log("O mês selecionado é válido.");
    }
  } else {
    console.log("O mês selecionado é inválido.");
  }

  if (dia >= 1) {
    if (mes == 2) {
      if (dia > 28) {
        console.log("O dia selecionado é inválido para o mês de fevereiro, ele tem 28 dias.");
      }  else {
        console.log("O dia selecionado é válido.");
      }
    } else {
      if(dia > 30) {
        console.log("O dia selecionado é inválido.");
      } else {
        console.log("O dia selecionado é válido.");
      }
    }
  } else {
    console.log("O dia selecionado é inválido.");
  }
} else {
  console.log("O ano selecionado é inválido.");
}
