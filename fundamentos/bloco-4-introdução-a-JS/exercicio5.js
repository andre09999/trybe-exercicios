const currentHour = 4;
let message = null;

if (currentHour >= 22) {
    message = "Não deveriamos comer nada, é hora de dormir"
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite,vamos jantar:D"
}
else if (currentHour >= 14 && currentHour < 18) {
    message="Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour >= 11 && currentHour < 14) {
    message="Hora do Almoço!!!"
}
else if (currentHour >= 4 && currentHour < 11) {
    message="Humm, CHeiro de café recém passado"
}
console.log(message)