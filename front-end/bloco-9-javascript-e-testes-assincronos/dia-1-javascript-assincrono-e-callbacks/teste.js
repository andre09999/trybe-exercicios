const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
    const frase = `Mars temperature is: ${getMarsTemperature()}° degree Celsius`
    return frase
}; // imprime "Mars temperature is: 20 degree Celsius", por exemplo
console.log(sendMarsTemperature())