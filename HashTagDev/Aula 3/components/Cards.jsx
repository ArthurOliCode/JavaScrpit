import Card from "./Card";

import {
  pratosPrincipais,
  sobremesas,
  bebidas,
} from "../hashtaurante/src/assets/cardapio";

const Cards = ({ numCategoriaSelecionada }) => {
  const itensCategorias = [pratosPrincipais, sobremesas, bebidas];
  const categoriaSelecionada = itensCategorias[numCategoriaSelecionada];

  return (
    <div className="cards">
      {categoriaSelecionada.map((item) => (
        <Card
          titulo={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          imagem={item.imagem}
        />
      ))}
    </div>
  );
};

export default Cards;
