function ObtemMaiorValor() {
    if (vet.length === 0) {
        return null;//* Para eu não esquecer,null é um valor especial usado para indicar que uma variável não se refere a nenhum objeto ou valor válido. *//
    }

    let maior = vet[0];

    for (let i = 1; i < vet.length; i++) {
        if (vet[i] > maior) {
            maior = vet[i];
        }
    }
    return maior;
}

function ObtemMenorValor() {

    let menor = vet[0];

    for (let i = 0; i < vet.length; i++) {
        if (vet[i] < menor) {
            menor = vet[i];
        }
    }
    return menor;
}

function ObtemSomaValor() {
    let soma = 0;
    for (let i = 0; i < vet.length; i++) {

        soma += vet[i];
    }
    return soma;
}

function ObtemMediaValor() {

    let vasco = ObtemSomaValor()
    let media = vasco / vet.length

    return media;
}

function SomaMatrizes(matA, matB) {
    let soma1 = 0;
    let soma2 = 0;

    for (let i = 0; i < matA.lenght; i++) {

        soma1 += matA[i];

    }
    let somaMatrizes = soma1 + soma2;
    return somaMatrizes;


}