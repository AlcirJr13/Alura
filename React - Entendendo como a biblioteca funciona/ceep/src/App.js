import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
function App() {
  return (
    <section>
      <form action="">
        <input type="text" placeholder="Título" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Escreva sua nota..."
        />
        <button>Criar nota</button>
      </form>
      <ListaDeNotas />
    </section>
  );
}

export default App;
