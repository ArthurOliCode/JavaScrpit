const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

const quantidadeCapitulos = 10;

let taTocando = false;
let capitulo = 1;

function tocarFaixa() {
  audio.play();
  taTocando = true;
  botaoPlayPause.classList.add("tocando");
}

function pausarFaixa() {
  audio.pause();
  taTocando = false;
  botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausarFaixa() {
  if (taTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function capituloAnterior() {
  pausarFaixa();

  if (capitulo === 1) {
    capitulo = quantidadeCapitulos;
  } else {
    capitulo -= 1;
  }

  audio.src = "/audios/" + capitulo + ".mp3";
  nomeCapitulo.innerText = "Capítulo " + capitulo;
}

function proximoCapitulo() {
  pausarFaixa();

  if (capitulo < quantidadeCapitulos) {
    capitulo += 1;
  } else {
    capitulo = 1;
  }

  audio.src = "/audios/" + capitulo + ".mp3";
  nomeCapitulo.innerText = "Capítulo " + capitulo;
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);

audio.addEventListener("ended", proximoCapitulo);
