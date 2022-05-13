function calculator(num1, num2) {
    const obj = {
        add: num1 + num2 ,
        mult: num1 * num2,
        div: Math.floor(num1/num2),
        sub: num1-num2
}
    return obj
}
console.log(calculator(5,6))
  module.exports = calculator;