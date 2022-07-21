const service = require('./service');
jest.mock("./service.js")

test('Verifica se e uma função', () => {
    service.aleatorio();
    expect(service.aleatorio).toHaveBeenCalled();
});
test('verifica retorno', () => {
    service.aleatorio = jest.fn().mockReturnValue(10);
    expect(service.aleatorio()).toBe(10);
})

test('verifica retorno da divisao', async() => {
    service.aleatorio();
    service.aleatorio.mockImplementation((a,b)=> a/b)
    expect( service.aleatorio).toHaveBeenCalled();
    expect( service.aleatorio(6,3)).toBe(2)
})
test('verifica retorno da multiplicação', async() => {
    service.aleatorio();
    service.aleatorio.mockImplementation((a,b,c)=> a*b*c)
    expect( service.aleatorio).toHaveBeenCalled();
    expect(service.aleatorio(6, 3, 4)).toBe(72);
    service.aleatorio.mockReset();
    service.aleatorio.mockImplementation((a) => a * 2)
    expect(service.aleatorio(6)).toBe(12);
    
})