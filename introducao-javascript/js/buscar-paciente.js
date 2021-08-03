var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", () => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", () => {
    var erroAjax = document.querySelector("#erro-ajax");
    erroAjax.classList.add("invisivel");
    if (xhr.status == 200) {
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach((paciente) => {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      erroAjax.classList.remove("invisivel");
    }
  });
  xhr.send();
});
