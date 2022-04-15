function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek()

// Escreva seu código abaixo.
function Dezembro() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const diasMes = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        const mes = dezDaysList[i]
        const diasDe = document.createElement('li')
        diasDe.innerText = mes;
        if (diasDe.innerText == 24 || diasDe.innerText == 25 || diasDe.innerText == 31) {
            diasDe.className = "day holiday"
            if (diasDe.innerText == 25) {
                diasDe.className = "day holiday friday"
            }
        } else if (diasDe.innerText == 4 || diasDe.innerText == 11 || diasDe.innerText == 18 || diasDe.innerText == 25) {
            diasDe.className = "day friday";
        } else {
            diasDe.className = "day";
        }
        diasMes.appendChild(diasDe);
    }

}
Dezembro();

function feriados() {
    const fer = document.querySelector('.tasks-container');
    const button = document.createElement('div')
    button.id = 'btn-holiday'
    const novo = document.createElement("BUTTON")
    novo.className = 'buttons-container'
    novo.innerText = 'Feriados'
    button.appendChild(novo)
    fer.appendChild(button)
}

feriados()
const botao = document.getElementsByClassName("buttons-container")[1]
botao.addEventListener("click", recebe);


function recebe(evento) {
    let muda = document.querySelectorAll(".holiday")
    for (let i = 0; i < muda.length; i += 1) {
        if ( muda[i].style.background !== 'white') {
            muda[i].style.background = 'white'
            muda[i].style.color = 'green'
        } else {
            muda[i].style.background = ''
            muda[i].style.color = 'white'
        }
    }
        
    }


function sexta() {
    const fer1 = document.querySelector('.tasks-container');
    const button1 = document.createElement('div')
    button1.id = 'btn-friday'
    const novo1 = document.createElement("BUTTON")
    novo1.className = 'buttons-container'
    novo1.innerText = 'Sexta-feira'
    button1.appendChild(novo1)
    fer1.appendChild(button1)
}

sexta()

function displayFridays(fridaysArray) {
    let botao = document.querySelector('#btn-friday');
    let sexta = document.getElementsByClassName('friday');
    let texto = 'Sextouu  🥳';
    botao.addEventListener('click', function () {
        for (let i = 0; i < sexta.length; i += 1) {
            if (sexta[i].innerHTML !== texto) {
                sexta[i].innerHTML = texto;
                sexta[i].style.background = 'white'
                sexta[i].style.color = 'green'
                const audio = document.querySelector('audio')
                audio.play()
            } else {
                sexta[i].innerHTML = fridaysArray[i];
                sexta[i].style.background = ''
                sexta[i].style.color = 'white'
            }
        }
    })
};

let dezFridays = [4, 11, 18, 25];
displayFridays(dezFridays);

function audio() {
    const audio = document.querySelector('.tasks-container');
    const musica = document.createElement('audio')
    musica.src = 'friday-cortado.mp3'
    musica.id = 'audio'
    audio.appendChild(musica)

}
audio()

function dayMouseOver() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
        event.target.style.border = "2px solid black"
    })
};

function dayMouseOut() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function (event) {
        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '20px';
        event.target.style.border = "none"
    })
};

dayMouseOver();
dayMouseOut();

function newTaskSpan(task) {
    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');

    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
};

newTaskDiv('blue');

function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');

    myTasks.addEventListener('click', function (event) {
        if (selectedTask.length === 0) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    });
};

setTaskClass();

function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    days.addEventListener('click', function (event) {
        let eventTargetColor = event.target.style.color;
        if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
        } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
            event.target.style.color = 'rgb(119,119,119)';
        }
    });
};

setDayColor();
function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');

    addInputButton.addEventListener('click', function () {
        if (getInputField.value.length > 0) {
            let newLi = document.createElement('li');
            newLi.innerText = getInputField.value;

            getTaskList.appendChild(newLi);
            getInputField.value = '';
        } else {
            alert('Error: Digite ao menos 1 caractere.');
        }
    })

    getInputField.addEventListener('keyup', function (event) {
        if (event.key === 'Enter' && getInputField.value.length > 0) {
            let newLi = document.createElement('li');
            newLi.innerText = getInputField.value;

            getTaskList.appendChild(newLi);
            getInputField.value = '';
        }
    });
};

addNewTask();