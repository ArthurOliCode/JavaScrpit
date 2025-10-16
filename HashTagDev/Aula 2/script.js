// const imagemVisualizacao = document.getElementById("visualizacao");
const imagemVisualicao = document.querySelector("#visualizacao img");
const tituloImagem = document.querySelector("h1");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');

// console.log(nomeCorSelecionada);
// console.log(imagemMiniatura0);

const opcoesTamanho = ["41 mm", "45 mm"];
const opcoesCores = [
  "Verde-cipreste",
  "Azul-inverno",
  "Meia-noite",
  "Estelar",
  "Rosa-claro",
];
// console.log(opcoesTamanho[0]);

let numImagemSelecionada = 1;
let numTextoSelecionado = 1;
let numCorSelecionada = 1;
let src = "";

function atualizarCorSelecionada() {
  const opcaoCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);

  numCorSelecionada = opcaoCorSelecionada;

  const nomeCor = opcoesCores[numCorSelecionada];

  tituloImagem.innerText =
    "Pulseira loop esportiva " +
    nomeCor.toLowerCase() +
    " para caixa de " +
    opcoesTamanho[numTextoSelecionado];

  nomeCorSelecionada.innerText = "Cor - " + nomeCor;

  src = "./imagens/opcoes-cores/imagens-" + nomeCor.toLowerCase() + "/";

  imagemVisualicao.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-" +
    numImagemSelecionada +
    ".jpeg";
  //  console.log(nomeCor);

  imagemMiniatura0.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-0.jpeg";

  imagemMiniatura1.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-1.jpeg";

  imagemMiniatura2.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-2.jpeg";
}

function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);

  numTextoSelecionado = opcaoTamanhoSelecionado;

  let tamanhoCaixa = opcoesTamanho[numTextoSelecionado];
  //  console.log(opcaoTamanhoSelecionado);

  if (tamanhoCaixa == "41 mm") {
    imagemVisualicao.classList.add("caixa-pequena");
  } else {
    imagemVisualicao.classList.remove("caixa-pequena");
  }

  tituloImagem.innerText =
    "Pulseira loop esportiva " +
    opcoesCores[numCorSelecionada].toLowerCase() +
    " para caixa de " +
    tamanhoCaixa;
}

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);

  // console.log(opcaoImagemSelecionada);
  numImagemSelecionada = opcaoImagemSelecionada;

  imagemVisualicao.src = src + "imagem-" + numImagemSelecionada + ".jpeg";

  /* imagemVisualicao.src =
    "./imagens/opcoes-cores/imagens-" +
    opcoesCores[numCorSelecionada].toLowerCase() +
    "/imagem-" +
    numImagemSelecionada +
    ".jpeg";
  */
}

// console.log(imagemVisualicao);
