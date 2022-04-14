let vai = 'Exercício 5.2 - JavaScript DOM';
let texto = document.querySelector('body');
console.log(texto)
let titulo = document.createElement('section')
titulo.innerText = vai
titulo.className = 'title'
texto.appendChild(titulo);

let main = document.createElement('main');
main.className = 'main-content'
texto.appendChild(main)

let corpo = document.querySelector('.main-content');
let section = document.createElement('section');
section.className = 'center-content'
corpo.appendChild(section)

let corpo1 = document.querySelector('.center-content');
let p = document.createElement('p');
corpo1.appendChild(p)

let section2 = document.createElement('section');
section2.className = 'left-content'
corpo.appendChild(section2)

let section3 = document.createElement('section');
section3.className = 'right-content'
corpo.appendChild(section3)

let img = document.querySelector('.left-content');
let image = document.createElement('img');
image.src = 'https://picsum.photos/200'
image.className = 'small-image'
img.appendChild(image)


let lista1 = document.querySelector('.right-content');
let lista = document.createElement('ul');
lista.className = 'listaNaoOrdenada'
lista1.appendChild(lista)

let num = ['1','2','3','4','5','6','7','8','9','10']
let lista2 = document.querySelector('.listaNaoOrdenada');

for (let i = 0; i < num.length; i += 1){
    let index = num[i];
    let num1 = document.createElement('li');
    num1.innerText = index;
    num1.className = 'lista';
    lista2.appendChild(num1)
}

let corp = document.querySelector('.main-content');
let h3 = document.createElement('h3');
h3.className = 'description'
corpo.appendChild(h3)

let corp1 = document.querySelector('.main-content');
let h31 = document.createElement('h3');
h31.className = 'description'
corpo.appendChild(h31)

let corp2 = document.querySelector('.main-content');
let h32 = document.createElement('h3');
h32.className = 'description'
corpo.appendChild(h32)

let rem = document.querySelector('.main-content')
rem.removeChild(rem.firstElementChild.nextElementSibling)

document.getElementsByClassName("right-content")[0].style.margin = "auto"

document.querySelector('.right-content').parentElement.style.backgroundColor = 'green'

let remo = document.querySelectorAll('.lista');
for (let i = 0; i < remo.length; i += 1){
    let cont = remo[i];

    if (cont.innerText.includes('9')) {
        lista2.removeChild(cont);
    }

    if (cont.innerText.includes('10')) {
        lista2.removeChild(cont);
    }
}console.log(remo)
