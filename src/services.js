export function dobro(n) {
    return n * 2;

}
export function somar(a, b) {
    return a + b;

}

export function corPrimaria(cor) {
    cor = cor.toLowerCase();
    return cor == 'azul' || cor == 'amarelo' || cor == 'vermelho'
}


export function ingresso(qtdInteira, qtdMeia, diaSemana, nacionalidade) {
    if (nacionalidade.toLowerCase() == 'brasileira')
        return (qtdInteira + qtdMeia) * 5;

    else if (diaSemana.toLowerCase() == 'quarta')
        return (qtdInteira + qtdMeia) * 14.25;

    else
        return (qtdInteira * 28.5) + (qtdMeia * 14.25);
}

export function frequenciaCaracter(texto, caractere) {
    let qtd = 0
    for (let letra of texto) {
        if (letra == caractere)
            qtd++
    }
    return qtd;
}

export function maiorNumero(numeros) {
    let maior = Number.MIN_VALUE;
    for (let item of numeros) {
        if (item > maior)            maior = item;
    }
    return maior;
}
