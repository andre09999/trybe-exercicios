const soma = require('./script')

describe('Verificar saida', () => {
    it('teste de retorno se 4 + 5 e = 9', () => {
        expect(9).toEqual(soma(4,5))
    })
    it('teste de retorno 0 + 0 e igual a 0', () => {
        expect(0).toEqual(soma(0,0))
    })
    it('teste do retorno erro string', () => {
        expect(()=> soma('A',1)).toThrow(Error)
    })
    it('teste de retono erro retorna frase', () => {
        expect(()=>soma('A',1)).toThrowError(new Error('parameters must be numbers'))
    })
})