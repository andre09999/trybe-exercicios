const enviar = document.querySelector('#env')
const reset = document.querySelector('#res')
const imagem = document.querySelector('#img')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const areaTxt = document.querySelector('#area-de-texto')

enviar.addEventListener('click', function enviarRe(event) {
    event.preventDefault();
    if (imagem.checked) {
        console.log('check')
       
    } else {
        console.log('dont check')
        alert('Autorize o uso de imagem para constinuar')
    }
    if (nome.value.length > 40 || nome.value.length > 10) {
        alert('Dados Inválidos');
        nome.focus();
    } else if (email.value.length > 50 || email.value.length < 10) {
        alert('Dados Inválidos ');
        email.focus();
    }else if (areaTxt.value.length >500|| areaTxt.value === "") {
        alert('Dados Inválidos');
        areaTxt.focus();
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
    console.log(nome.value.length)
})