//SOMAR
function somar(numero1, numero2) {
    let soma = numero1 + numero2
    return 'A soma de ' + numero1 + ' + '+ numero2 + ' = ' + soma  
}

let resultadoSoma = somar(5,5)
console.log(resultadoSoma)

//DIVIDIR
function divisao(numero1, numero2) {
    let dividir = numero1 / numero2
    return 'A divisão de ' + numero1 + ' / ' + numero2 + ' = ' + dividir
}

let resultadoDivisao = divisao(50,5)
console.log(resultadoDivisao)

//MULTIPLICAR
function multiplicacao(numero1, numero2){
    let multiplicar = numero1 * numero2
    return 'A multiplicação de ' + numero1 + ' * ' + numero2 + ' = ' + multiplicar
}

let resultadoMultiplicacao = multiplicacao(5,10)
console.log(resultadoMultiplicacao)

//SUBTRAÇÃO
function subtracao(numero1, numero2){
    let subtrair = numero1 - numero2
    return 'A subtração de ' + numero1 + ' - ' + numero2 + ' = ' + subtrair
}

let resultadoSubtracao = subtracao(50,40)
console.log(resultadoSubtracao)