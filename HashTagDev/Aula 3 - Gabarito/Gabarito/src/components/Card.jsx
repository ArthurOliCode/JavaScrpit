import React from "react";
import ImgProduto from "../assets/pratos/burguer-picanha.jpeg";

const Card = ({ itemCategoria }) => {
  const { nome, preco, imagem, descricao } = itemCategoria;

  return (
    <div className="card">
      <div className="card__textos">
        <h2 className="card__titulo">{nome}</h2>

        <p>{descricao}</p>

        <p className="card__preco">{preco}</p>
      </div>

      <div className="card__img">
        <img src={imagem} alt="Imagem do Produto" />
      </div>
    </div>
  );
};

export default Card;
