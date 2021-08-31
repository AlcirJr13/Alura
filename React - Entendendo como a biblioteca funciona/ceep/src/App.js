import React, { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
class App extends Component {
  criarNota(titulo, texto) {
    console.log(`Uma nota foi criada` + titulo + " " + titulo);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
