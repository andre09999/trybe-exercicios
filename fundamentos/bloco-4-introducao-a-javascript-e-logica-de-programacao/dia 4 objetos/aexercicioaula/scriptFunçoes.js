let status = 'deslogado';

function logarDeslogar() {
    if (status === 'deslogado') {
        status = 'logado';
    } else {
        status = 'deslogado';
    }
}

console.log(status);
logarDeslogar();
console.log(status);
logarDeslogar();
console.log(status);

console.log('O usuário está '+ status)