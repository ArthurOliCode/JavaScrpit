

function calc() {
    // Declarando váriavel do input
    let numtext = window.document.getElementById("txtNum");
    let textErro = window.document.getElementById("txtErro");
    let tabelaSelect = window.document.getElementById("table");

    // Limpeza do campo txtErro
    textErro.innerHTML = "";
    tabelaSelect.innerHTML = ""

    // Caso nada seja digitado
    if (numtext.value.trim() === "") {
        textErro.innerText = `Erro, o campo não pode estar vazio.`;
    } else {
        // Conversão em Number do input
        let num = Number(numtext.value);
        textErro.innerText = "";
        let tabuada = "";

        for (var i = 1; i <= 10; i++) {
            let option = document.createElement("option");
            let multi = num * i;
            option.value = `opt${i}`;
            option.textContent = `${num} x ${i} = ${multi}`;
            tabelaSelect.appendChild(option);
        }
    }
}