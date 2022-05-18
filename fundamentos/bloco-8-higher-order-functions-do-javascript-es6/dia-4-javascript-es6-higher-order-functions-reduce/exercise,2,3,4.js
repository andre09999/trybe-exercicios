const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  function reduceNames() {
      return books.reduce((acc, arr,index,array) => {
          if (index === array.length - 1) {
              return `${acc} ${arr.author.name}.` }
              return `${acc} ${arr.author.name},` },[])
  }
console.log(reduceNames())
  
const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
  const soma = [];
    return books.reduce((acc, arr,index,array) => {
        let ano = arr.releaseYear - arr.author.birthYear;
        soma.push(ano)
        if (index === array.length - 1) {
           return `A media de idade dos autores quando lançaram os livros e de ${soma.reduce(( res ,soma) => res + soma) / array.length } anos.`
        }
    },0)
}
console.log(averageAge())
function longestNamedBook() {
    // escreva seu código aqui
    return books.reduce((acc,arr) => acc > arr.name.length ? arr : acc)
}
  console.log(longestNamedBook())