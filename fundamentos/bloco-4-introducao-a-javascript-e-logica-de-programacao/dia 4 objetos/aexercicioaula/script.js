let singer = {
    name : 'Milton',
    lastName : 'Nascimento',
    nickname : 'Bituca',
    age : 77,
    bestAlbuns: ['Travessia', "Clube da esquina", "Minas"],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Jnaieor',
    }
};
console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.')


singer['fullName'] = singer.name + ' ' + singer.lastName;
console.table(singer);
console.log('O cantos ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);