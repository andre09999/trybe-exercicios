// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function clicar(event) {
    event.preventDefault();
    console.log(event.target);
})
INPUT_CHECKBOX.addEventListener('click', function clicar(event){
    event.preventDefault();
    console.log(event.target);
})

INPUT_TEXT.addEventListener('keypress', function clicar(event) {
    event.preventDefault();
    let tecla = event.key;
    if (tecla == 'a') {
        INPUT_TEXT.value += tecla;
        console.log(event.key)
    }
    
    
})