let ConjuntoEntrada = [1, 2, 3, 4, 5];
let ConjuntodsaPartes = GeradorDeConjuntoDePartes(ConjuntoEntrada);

ConjuntodsaPartes.sort((a, b) => a.length - b.length || a.join(',').localeCompare(b.join(',')))
.forEach(subconjunto => {
    console.log(`Tamanho ${subconjunto.length}: { ${subconjunto.join(', ')} }`);
});
console.log(`\nTotal de subconjuntos: ${ConjuntodsaPartes.length}`);
    
function GeradorDeConjuntoDePartes(ConjuntoEntrada) {
    let ListaSubConjuntos = [];
    let tamanhosubConjuntos = Math.pow(2, ConjuntoEntrada.length)

    for (let j = 0; j < tamanhosubConjuntos; j++) {
        let List_Sub_Conj_Temp = []

        for (let k = 0; k < ConjuntoEntrada.length; k++) {
            if ((j & (1 << k)) !== 0) {
                List_Sub_Conj_Temp.push(ConjuntoEntrada[k])
            } 
        }
        ListaSubConjuntos.push(List_Sub_Conj_Temp)
        
    }

    return ListaSubConjuntos
}