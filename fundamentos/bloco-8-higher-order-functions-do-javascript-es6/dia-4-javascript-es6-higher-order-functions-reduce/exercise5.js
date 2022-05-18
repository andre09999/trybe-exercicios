const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
      return names.reduce((acc, arr) => acc + arr.split('').reduce((soma, co) => {
          if (co === 'a' || co === 'A') {
              return soma + 1;
          } else {
              return soma;
          }
      },0),0)
}
  console.log(containsA())