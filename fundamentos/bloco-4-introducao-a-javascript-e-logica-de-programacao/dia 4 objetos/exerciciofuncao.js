function maior(primeiroNum, SegundoNum) {
    if (primeiroNum > SegundoNum) {
        return primeiroNum + 'é maior que ' + SegundoNum;
    } else if (SegundoNum > primeiroNum) {
        return SegundoNum + ' é maior que ' + primeiroNum;
    } else {
        return 'Os números são iguais';
    }
}
console.log(maior(10, 20));
console.log(maior(2, -5));
console.log(maior(1, 1));