const {encode,decode} = require('./script');
;
describe('encode e decode', () => {
    it('Encode e definida', () => {
        expect(encode).toBeDefined();
    })
    it('Encode e uma função', () => {
        expect(typeof encode).toEqual('function')
    })
    it('se troca as vogais a pelo 1,2,3,4,5', () => {
        expect(encode('aeiou')).toEqual('12345')
    })
    it('se decodifica 1,2,3,4,5 para a,e,i,o,u', () => {
        expect(decode('12345')).toEqual('aeiou')
    })
    it('se a string tem mesmo numeros', () => {
       expect(decode('trybevqv').length).toEqual(8)
   })
})