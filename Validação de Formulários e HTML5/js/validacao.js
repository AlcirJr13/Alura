export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (!input.validity.valid) {
    input.parentElement.classList.add("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      mostraMensagemDeErro(tipoDeInput, input);
  } else {
    input.parentElement.classList.remove("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
  }
}

const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensagensDeErros = {
  nome: {
    valueMissing: "O campo Nome não pode estar vazio.",
  },
  email: {
    valueMissing: "O campo Email não pode estar vazio.",
    typeMismatch: "digite um email válido",
  },
  senha: {
    valueMissing: "O campo Senha não pode estar vazio.",
    patternMismatch:
      "A senha deve conter entre 4 a 20 caracteres, com pelo menos 1 letra maíuscula, 1 letra minúscula, 1 número e 1 símbolo.",
  },
  dataNascimento: {
    valueMissing: "O campo de data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior de idade para se cadastrar.",
  },
};

const validadores = {
  dataNascimento: (input) => validadaDataNascimento(input),
};

function mostraMensagemDeErro(tipoDeInput, input) {
  let mensagem = "";

  tiposDeErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagensDeErros[tipoDeInput][erro];
    }
  });

  return mensagem;
}

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
