// camelCase Sensitivy
const botaoPlayPause = document.querySelector("div#play-pause");
const audio = document.getElementById("audio-capitulo");
const botaoProximoCap = document.getElementById("proximo");
const botaoAnteriorCap = document.getElementById("anterior");
const tituloCapitulo = document.getElementById("capitulo");

const qtdCapitulos = 10;

let tocando = false;
let audioAtual = 1;

/*
console.log(audio);
console.log(botaoPlayPause);
*/

// audio.play();

function playFaixa() {
  audio.play();
  tocando = true;
  botaoPlayPause.classList.add("tocando");
}

function pauseFaixa() {
  audio.pause();
  tocando = false;
  botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausar() {
  if (tocando === true) {
    pauseFaixa();
  } else {
    playFaixa();
  }
}

function proximoCapitulo() {
  pauseFaixa();

  if (audioAtual < qtdCapitulos) {
    audioAtual += 1;
  } else {
    audioAtual = 1;
  }

  audio.src = "./audios/" + audioAtual + ".mp3";
  tituloCapitulo.innerText = "Capítulo " + audioAtual;
}

function capituloAnterior() {
  pauseFaixa();

  if (audioAtual === 1) {
    audioAtual = qtdCapitulos;
  } else {
    audioAtual -= 1;
  }

  audio.src = "./audios/" + audioAtual + ".mp3";
  tituloCapitulo.innerText = "Capítulo " + audioAtual;
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoProximoCap.addEventListener("click", proximoCapitulo);
botaoAnteriorCap.addEventListener("click", capituloAnterior);
