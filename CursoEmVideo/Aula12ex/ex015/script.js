function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.querySelector('div#res');
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Verifique os dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var fetaria = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 60) {
                //idoso 
                img.setAttribute('src', 'imagens/Hidoso.png')
                fetaria = 'idoso'
            } else if (idade > 21 && idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/Hadulto.png')
                fetaria = 'adulto'
            } else if (idade <= 21 && idade > 10) {
                //jovem
                img.setAttribute('src', 'imagens/Hjovem.png')
                fetaria = 'jovem'
            } else {
                //criança
                img.setAttribute('src', 'imagens/Hcrianca.png')
                fetaria = 'criança'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 60) {
                //idosa
                img.setAttribute('src', 'imagens/Midosa.png')
                fetaria = 'idoso'
            } else if (idade > 21 && idade < 60) {
                //adulta
                img.setAttribute('src', 'imagens/Madulta.png')
                fetaria = 'adulto'
            } else if (idade > 10 && idade <= 21) {
                //jovem
                img.setAttribute('src', 'imagens/Mjovem.png')
                fetaria = 'jovem'
            } else {
                //criança
                img.setAttribute('src', 'imagens/Mcrianca.png')
                fetaria = 'criança'
            }

        }
        res.style.textAlign = 'center'
        if (genero = 'Homem') {
            res.innerHTML = `Foi detectado um ${fetaria} de ${idade}`
        } else if (genero = 'Mulher') {
            res.innerHTML = `Foi detectada uma ${fetaria} de ${idade}`
        }

        res.appendChild(img)
    }
}