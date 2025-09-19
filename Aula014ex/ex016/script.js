
function verificar(){
    // Estabelcendo Variáveis inciais (inputs e elementos da página)
    let inicioInput = window.document.getElementById("txtInicio")
    let fimInput = window.document.getElementById("txtFim")
    let passoInput = window.document.getElementById("txtPasso")
    let contagem = window.document.getElementById("contagem")
    let p = window.document.getElementById('resultado')


    // Conversão dos inputs para númericos
    let inicio = Number(inicioInput.value)
    let fim = Number(fimInput.value)
    let passo = Number(passoInput.value)    
    let cont = ""


    // Verificação para não aceitar os campos de Fim e Passo vazios
    if(fimInput.value.trim() == ""  || passoInput.value.trim() == ""){
        p.innerHTML = `Impossível contar com campos inválidos!!`  
    }else{
        // Adaptação caso o início seja vazio, transformando-o em 1
        if(inicioInput.value.trim() == ''){
            alert("Considerando o início como 1")
            inicioInput.value = 1
            inicio = inicioInput
        }
        // Verificação caso o início seja igual à zero
        else if(inicio == 0){
            alert("Não é possível contar com o início igual a 0")
            return false
        }
        if(passo == 0){
            p.innerHTML = `Não é possível contar com o passo em 0!`
            return false
        }

        // Verificação de contagem regressiva ou progressiva
        if((inicio < fim) && passo < 0){
            passo = Math.abs(passo); // Converte o Passo para positivo
        }else if((inicio > fim) && passo > 0){
            passo = -passo;
        }
        
        const emoji = passo > 0 ? '👉':'👈'; // Variável para emojis

        if(passo > 0){
            // contagem progressiva
            for(var i = inicio; i <= fim; i += passo){
                cont += `${i} ${emoji}`
            }
        }else if(passo < 0){
            // contagem regressiva
            for(var i = inicio; i >= fim; i += passo){
                cont += `${i} ${emoji}`
            }
        }
        
        // Conversão do último emoji
        cont = cont.slice(0, -2) + `🏁`;
        // Resultado
        p.innerHTML = `${cont}`
    }
}