let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(4)

console.log(`O tamanho do vetor é: ${num.length}`)
console.log(`Nosso vetor é ${num}`)
num.sort()
console.log(`Nosso vetor é ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(let pos = 10; pos < 30; pos++){
    num.push(pos)
}
for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

console.log(`Nosso vetor é [${num}]`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
