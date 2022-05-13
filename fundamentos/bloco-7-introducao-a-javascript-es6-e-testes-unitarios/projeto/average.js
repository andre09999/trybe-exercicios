const average = (Ale) => {
    let resultado = 0;
    if (Ale.length === 0) return undefined;
    for (let i of Ale) {
      if (typeof (i) !== 'number') return undefined;
        resultado += i;
    }
    return Math.round(resultado / Ale.length);
  };

module.exports = average;
