let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers.sort());

let crescente = numbers.sort(function(a, b) {
    return a - b;
});
console.log(crescente);