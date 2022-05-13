const circle = (raio) => {
    const r = 3.14;
    if (!raio) { return undefined; }
    return {
      raio,
      Area: r * raio * raio,
      Circunferência: 2 * r * raio,
    };
};
  console.log(circle(10))
  
  module.exports = circle;