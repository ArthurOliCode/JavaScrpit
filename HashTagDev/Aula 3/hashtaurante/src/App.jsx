import "../src/App.css";

import Categorias from "../../components/Categorias";
import Cards from "../../components/Cards";
import Banner from "../../components/Banner";
import { useState } from "react";

function App() {
  // Hook
  /// variáveis de estado

  const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);

  // Forma incorreta de definir o valor
  // numCategoriaSelecionada = 1;

  // Forma correta
  // setNumCategoriaSelecionada(1);

  return (
    <div className="container">
      <Banner />

      <Categorias
        numCategoriaSelecionada={numCategoriaSelecionada}
        setNumCategoriaSelecionada={setNumCategoriaSelecionada}
      />
      {/* self closing Tag*/}

      <Cards numCategoriaSelecionada={numCategoriaSelecionada} />
    </div>
  );
}

export default App;
