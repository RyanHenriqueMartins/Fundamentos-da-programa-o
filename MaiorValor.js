function ObtemMaiorValor(vet) {
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