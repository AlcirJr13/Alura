const dataNascimento = document.querySelector("#nascimento");

dataNascimento.addEventListener("blur", (evento) => {
  validadaDataNascimento(evento.target);
});

function validadaDataNascimento(input) {
  const dataRecebida = new Date(input.value);
  let mensagem = "";

  if (!maiorQue18(dataRecebida)) {
    mensagem = "Você deve ser maior de idade para se cadastrar.";
  }

  input.setCustomValidity(mensagem);
}

function maiorQue18(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDay()
  );

  return dataMais18 <= dataAtual;
}
