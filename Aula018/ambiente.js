let amigo = {
    nome:'José',
    idade: '20',
    peso: 74.2,
    engordar(p=0){
        console.log(`engordou`)
        this.peso += p
    }
}
console.log(`O ${amigo.nome} tem ${amigo.idade} anos e pesa ${amigo.peso}kg`)
amigo.engordar(3)
console.log(`O ${amigo.nome} tem ${amigo.idade} anos e pesa ${amigo.peso}kg \n\n`)

let pessoa = {
    nome(nome=''){
        if(nome.toLowerCase == "arthur"){
            console.log("Meu chara!")
        }
        return nome
    }, 
    idade(nas){
        let anoatual = new Date()
        id = anoatual.getFullYear() - nas
        return id
    }
}

pessoa.nome("Arthur")
console.log(`O ${pessoa.nome("Arthur")} tem ${pessoa.idade(2006)} anos, nasceu em 2006 `)