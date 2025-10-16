let valores = [8, 1, 4, 7, 2, 9]

console.log(`vetor : ${valores}`)
console.log(`o primeiro valor é ${valores[0]}\n\n`)
valores.sort()

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição [${pos}] tem o valor valores: ${valores[pos]}`)
    if(pos == valores.length - 1){
        console.log("\nFim\n\n\n")
    }
}

for(let pos in valores){
    console.log(`O valor da posição [${pos}] é ${valores[pos]}`)
    if(pos == valores.length - 1){
        console.log(`\nFim\n\n`)
    }
}

let indice = valores.indexOf(8);
console.log(`O valor 8 está na posição ${indice}`)

indice = valores.indexOf(10);
if(indice == -1){
    console.log(`O valor não foi encontrado no vetor valores`)
}else{
    console.log(`O valor está na posição ${indice}`)
}


