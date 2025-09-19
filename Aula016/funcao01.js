function parImpar(num){
    if(n % 2 == 0){
        return "par"
    }else{
        return "ímpar"
    }
}

let n = 10;
let res = parImpar(n)
console.log(`O número ${n} é ${res}.\n`)