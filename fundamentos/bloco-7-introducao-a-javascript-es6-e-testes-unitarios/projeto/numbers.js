const numbers = (arrey) => {
    for (let ini = 0; ini < arrey.length;ini+=1) {
        console.log(arrey[ini])
        if (typeof arrey[ini] === 'number') {
          console.log(arrey[i])
            return true;
        }
    }
    return false;
  };
  console.log(numbers(['2']))
  module.exports = numbers;