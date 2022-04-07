let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maior = 0;
let menor = 100;
let impar = 0;
let resul = 0;
console.log(numbers)
for (index = 0; index < numbers.length; index++){
    soma += numbers[index] 
    if (numbers[index] > maior) {
        maior = numbers[index];
    }
    if (numbers[index] < menor) {
        menor = numbers[index];
    }
    if (numbers[index]% 2 !=0) {
        impar += 1;
    }
}

let divisao = soma / numbers.length;
console.log(soma)
console.log(divisao)
if (divisao < 20){
    console.log( "valor maior que 20")
} else {
    console.log("valor menor ou igual a 20");
}
console.log(maior)
if (impar == 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(impar)
}
console.log(menor)
for (index = 1; numbers[index] <= 25; index++){
    console.log(numbers[index])
}

for (index = 0; index < numbers.length ; index++){
    console.log(numbers[index] / 2 )
}
