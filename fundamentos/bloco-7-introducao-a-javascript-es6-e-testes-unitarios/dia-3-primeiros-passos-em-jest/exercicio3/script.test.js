const func = require('./script.js');

describe('Teste 1', () => {
    it('retorno esperado', () => {
        expect(func(15)).toBe('fizzbuzz')
    })
    it('retorno fizz divisivel por 3', () => {
        expect(func(6)).toBe('fizz')
    })
    it('retorno buzz divisivel por 5', () => {
        expect(func(10)).toBe('buzz')
    })
    it('retorno não divisivel por nenhum', () => {
        expect(func(2)).toBe(2)
    })
    it('retorno false', () => {
        expect(func('1')).toBe(false)
    })
})