// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
    const myObject = {
        method: "GET",
        headers: { 'Accept': 'application/json' }
    };
    fetch(API_URL, myObject)
        .then(reponse => reponse.json())
        .then(data => append(data.joke))
};

function append(joker) {
    document.getElementById('jokeContainer').innerHTML = joker;
}
function append2(joker) {
    const ele = document.getElementById('principal')
    let div = document.createElement('div');
    div.className = 'cripto'
    div.innerHTML = joker;
    ele.append(div)
}
const coin = () => {
  const url = `https://api.coincap.io/v2/assets/`
    fetch(url).then(reponse => reponse.json()).then(data => filtrar(data.data))
};

function escreve2(moeda,symbol,priceUsd) {
    append2(`${moeda} ${symbol} : ${priceUsd}`)
}
const filtrar = (filtro) => {
    filtro.forEach(function ({name, rank ,symbol,priceUsd}){
        if (rank <= 10) {
            escreve2(name,symbol,priceUsd)
            console.log(name,symbol,priceUsd)
        }
  })
   
}
function inicio() {
    coin();
    fetchJoke()
   
}
window.onload = () => inicio();