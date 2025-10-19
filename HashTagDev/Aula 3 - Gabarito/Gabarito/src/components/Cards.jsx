import React from "react";
import Card from "./Card";
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio.js";

const Cards = ({ categoriaSelecionada }) => {
  const itensCategoria = [pratosPrincipais, sobremesas, bebidas];

  return (
    <div className="cards">
      {itensCategoria[categoriaSelecionada].map((itemCategoria, index) => (
        <Card key={index} itemCategoria={itemCategoria} />
      ))}
    </div>
  );
};

export default Cards;
