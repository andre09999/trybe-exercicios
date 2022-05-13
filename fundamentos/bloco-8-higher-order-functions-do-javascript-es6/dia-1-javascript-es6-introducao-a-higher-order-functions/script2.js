const numberCheck = (meuNumero, numero) => meuNumero === numero;
const result = (meuNumero, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callback(meuNumero, number) ? `Parabéns seu numero ${number} foi sorteado` : `Tente mais uma vez o numero sorteado foi ${number}`;
}
console.log(result(2,numberCheck))