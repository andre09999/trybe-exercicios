const vqv = (name, age) => {
    if (name === undefined || age === undefined) {
      return undefined;
    }
    return `Oi, meu nome é ${name}!
  Tenho ${age} anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!`;
  };
  console.log(vqv('Andre',26))
  module.exports = vqv;