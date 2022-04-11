player = {
    name: 'Andre',
    lastName: 'Luis',
    age: '26',
    bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018],
    meadals: {
        golden: 2,
        silver: 3,
    }
}
console.log('O jogador ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' Anos de idade.')
console.log('O jogador ' + player.name + ' ' + player.lastName + ' foi eleito o  melhor do mundo por ' + player.bestInTheWorld.length + ' vezes')
console.log('O jogador possui ' + player.meadals.golden + ' medalhas de ouro e ' + player.meadals.silver+' medalhas de prata.')
