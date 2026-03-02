// Funcao pura
function soma(a,b) {
    return a+b
}

console.log(soma(1,2))

// Funcao impura
// Geralmente é chamada de impura a função que altera variáveis de fora dela
let resultado

function soma2(a,b) {
    return resultado = a+b
}

console.log(soma2(1,2))
console.log(soma2(4,2))