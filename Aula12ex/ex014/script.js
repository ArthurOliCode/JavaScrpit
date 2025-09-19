
function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var date = new Date();
    var hora = date.getHours();
    var min = date.getMinutes();
    var periodo;

    if (hora >= 5 && hora < 12) {
        //Período da manhã
        periodo = "manhã";
        img.src = "imagens/manha.png"
        window.document.body.style.background = `#e3cba6`
    } else if (hora >= 12 && hora < 18) {
        //Período da tarde
        periodo = "tarde"
        img.src = "imagens/tarde.png"
        window.document.body.style.background = `#827361`
    } else if (hora >= 18 && hora <= 23) {
        //Período da noite
        periodo = "noite"
        img.src = "imagens/noite.png"
        window.document.body.style.background = `#2c2b2b`
    } else {
        //Período da madrugada
        periodo = "madrugada"
        img.src = "imagens/madrugada.png"
        window.document.body.style.background = `#4a303e`
    }

    msg.innerHTML = `Agora são ${hora}:${min} horas da ${periodo}.`
}