const adiciona = require('./script.js')

describe('Teste 1', () => {
    it('se retona o valor esperado', () => {
        expect(adiciona([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
    it('Se não retorna o array [1,2,3,4]', () => {
        expect(adiciona( [1, 2, 3, 4],3)).not.toEqual( [1, 2, 3, 4])
    })
    it('Se retona o valor esperado com  [1, 2, 3, 4]', () => {
        expect(adiciona([1, 2, 3, 4],5)).toEqual( ([1, 2, 3, 4]))
    })
})