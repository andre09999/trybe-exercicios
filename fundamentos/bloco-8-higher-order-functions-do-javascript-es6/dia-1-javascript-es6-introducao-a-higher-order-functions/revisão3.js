const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifica = (gabarito, estudante) => {
    if (gabarito === estudante){
        return 1
    } if (estudante === 'N.A') {
        return 0
    }
    if (gabarito !== estudante) {
        return -0.5
    }
}
const compara = (gabarito, estudante) => {
    let notaFinal = 0;
    for (let i = 0; i < gabarito.length; i += 1){
        const soma = verifica(gabarito[i], estudante[i])
        notaFinal += soma
    }
   console.log(`A nota final do estudante foi ${notaFinal}`)
}
compara(RIGHT_ANSWERS,STUDENT_ANSWERS)