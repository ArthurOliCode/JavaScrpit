const Card = ({ titulo, descricao, preco, imagem }) => {
  return (
    <div className="card">
      <div className="card__textos">
        {/* Nomenclatura BEM*/}

        <h2 className="card__titulo">{titulo}</h2>

        <p>{descricao}</p>

        <p className="card__preco">{preco}</p>
      </div>
      <div className="card__img">
        <img src={imagem} alt="Foto do produto" />
      </div>
    </div>
  );
};

export default Card;
