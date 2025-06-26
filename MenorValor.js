function ObtemMenorValor(vet){
    
    let menor = vet[0];
    
    for (let i = 0; i < vet.length; i++ ){
        if( vet[i] < menor){
            menor = vet[i];
        }
    }
    return menor;

}