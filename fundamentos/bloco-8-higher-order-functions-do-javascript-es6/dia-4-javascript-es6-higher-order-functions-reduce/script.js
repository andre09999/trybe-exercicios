const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
      return arrays.reduce( (acc,arr) => acc.concat(arr), [] )
}
  console.log(flatten())