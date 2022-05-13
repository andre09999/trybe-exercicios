const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compararRespostas = (g, e) => {
    if (g === e) {
        return 1;
    }
    if (e === 'N.A') {
        return 0;
    }
    return -0.5;
};

const compara = (g, e, acao) => {
    let cont = 0;
    for (let i = 0; i < g.length; i += 1){
        const acao1 = acao(g[i], e[i]);
        cont += acao1;
    }
    return`O resultado final e: ${cont} pontos`
}
console.log(compara(RIGHT_ANSWERS, STUDENT_ANSWERS, compararRespostas))
