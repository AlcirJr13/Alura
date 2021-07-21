var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValido = valdiaAltura(altura);

  if (!pesoValido) {
    console.log("Peso inválido");
    var pesoValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValido) {
    console.log("Altura inválido");
    var alturaValido = false;
    tdImc.textContent = "Altura inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaValido && pesoValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}
function validaPeso(peso) {
  if (peso > 0 && peso < 300) {
    return true;
  } else {
    return false;
  }
}

function valdiaAltura(altura) {
  if (altura > 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  var imc = peso / (altura * altura);

  return imc.toFixed(2);
}
