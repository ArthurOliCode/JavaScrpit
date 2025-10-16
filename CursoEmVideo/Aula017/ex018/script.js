
// Declaração de variáveis dos elementos html
let letNum = document.getElementById("txtNum");
let selectTableN = document.getElementById("tableNum");
let letErro = document.getElementById("txtErro");
let outputDiv = document.getElementById("output");
// Variáveis para validação e inserção de elementos
let vetorNum = [];

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function isLista(n, list) {
    if (list.includes(Number(n))) {
        return false;
    } else {
        return true;
    }
}

function focusInput() {
    letNum.value = '';
    letNum.focus();
}

function adicionar() {

    // Limpeza do elemento p#txtErro
    letErro.innerText = ``;

    // Verificação caso o input esteja vazio
    if (letNum.value.trim() === "") {
        letErro.innerText = `Erro! A entrada de números não pode estar vazia.`;
    } else {
        let num = Number(letNum.value);

        if (isNumber(num) && isLista(num, vetorNum)) {
            letErro.innerText = ``; // Limpeza do parágrafo de erro

            // Verificação caso o número digirado não esteja no vetor
            vetorNum.push(num);
            let option = document.createElement("option");
            option.value = `opt${vetorNum.length}`;
            option.textContent = `Valor ${num} adicionado.`;
            selectTableN.appendChild(option);
            vetorNum.sort();
        } else {
            if (!isNumber(num)) {
                letErro.innerText = `Erro! Digite um número entre 1 a 100.`;
                focusInput();
                return
            } else if (!isLista(num, vetorNum)) {
                letErro.innerText = `Erro! Digite um número diferente de ${num}.`;
                focusInput();
                return
            }
        }
    }
    focusInput();
    outputDiv.innerHTML = ` `;
}

function validar() {
    // Declaração das váriaveis para cálculos
    let menorNum = 0;
    let maiorNum = 0;
    let soma = 0;
    let mult = 1;
    let media = 0;
    let dados = document.createElement("p"); // Variável para criar parágrafo

    // Limpeza de div para output de informações
    outputDiv.innerHTML = ` `;

    // Limpeza do elemento p#txtErro
    letErro.innerText = ``;

    // Verificação caso o vetor esteja vazio
    if (vetorNum.length == 0) {
        letErro.innerText = `Erro! Impossível analisar sem nenhum número digitado.`;
        focusInput();
        return;
    } else {
        for (let pos = 0; pos < vetorNum.length; pos++) {
            if (pos == 0) {
                menorNum = vetorNum[pos];
                maiorNum = vetorNum[pos];
            }
            if (vetorNum[pos] < menorNum) {
                menorNum = vetorNum[pos];
            }

            if (vetorNum[pos] > maiorNum) {
                maiorNum = vetorNum[pos];
            }

            soma += vetorNum[pos];
            mult *= vetorNum[pos];
        }
        media = soma/vetorNum.length;

        // Adicionando os dados ao HTML
        dados.innerHTML += `Menor número é ${menorNum}. <br><br>`;
        dados.innerHTML += `Maior número é ${maiorNum}. <br><br>`;
        dados.innerHTML += `A soma dos números é ${soma}. <br><br>`;
        dados.innerHTML += `A multiplicação é ${mult}. <br><br>`;
        dados.innerHTML += `A média é ${media}. <br><br>`;
        dados.innerHTML += `Ao todo são ${vetorNum.length} números. <br><br>`;
        outputDiv.appendChild(dados);

        focusInput();
    }
}

function limpar(){
        // Limpeza do elemento p#txtErro
        letErro.innerText = ``;
        vetorNum = [] // Limpeza do vetor
        // Limpeza de div para output de informações
        outputDiv.innerHTML = ` `;
        // Limpeza da tag Select
        selectTableN.innerHTML = ` `;
        selectTableN.innerText = ` `;

}