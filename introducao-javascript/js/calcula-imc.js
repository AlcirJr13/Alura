var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = true;
  var alturaValido = true;

  if (peso <= 0 || peso >= 450) {
    console.log("Peso inválido");
    var pesoValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3) {
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

function calculaImc(peso, altura) {
  var imc = 0;
  var imc = peso / (altura * altura);

  return imc.toFixed(2);
}
