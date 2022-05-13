
const createStudent = (nome) => {
    return {
      nome,
      feedback: () => 'Eita pessoa boa!',
    };
  };
console.log(createStudent('Andre'))

module.exports = createStudent;