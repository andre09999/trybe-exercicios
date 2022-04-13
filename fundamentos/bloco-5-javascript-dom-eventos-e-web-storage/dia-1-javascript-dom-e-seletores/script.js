document.querySelectorAll('p')[1].innerText = 'Formado';
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'rgb(255,255,255)';
document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';
let texto = document.getElementsByTagName('p');
for (let i = 0; i < texto.length; i += 1) {
    console.log(texto[i].innerHTML);
    texto[i].innerHTML = texto[i].innerHTML.toUpperCase();
}

let par = document.getElementsByTagName('p');
for (let i = 0; i < par.length; i += 1) {
    console.log(par[i].innerHTML);
}
  