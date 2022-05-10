const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};
  
function noturno(obj, key, value) {
  obj[key] = value;
}
noturno(lesson2,'turno','noite')
function key(){
  console.table(Object.keys(lesson1))
  console.table(Object.keys(lesson2))
  console.table(Object.keys(lesson3))
}
key()
function tamanho() {
  console.log(Object.keys(lesson1).length)
}
tamanho()
function vaores() {
  console.table(Object.values(lesson1))
  console.table(Object.values(lesson2))
  console.table(Object.values(lesson3));
}
vaores()

  const junto = Object.assign({}, {lesson1,lesson2,lesson3})
  console.table(junto)

function totalSala() {
  const totalS = junto.lesson1.numeroEstudantes + junto.lesson2.numeroEstudantes + junto.lesson3.numeroEstudantes
  console.log(`São o total de ${totalS} alunos`)
}
totalSala()
function comp(objeto, posicao) {
 return Object.values(objeto)[posicao];
}
console.log(comp(lesson1,0))

function verifica(objeto, key, value) {
  const objetoo = Object.entries(objeto)
  let igual = false;
  console.log(objetoo)
  for (let i in objetoo) {
    if (objetoo[i][0] === key && objetoo[i][1] === value) {
      igual = true;
    }
  }
  return igual
}
console.log(verifica(lesson3, 'turno', 'noite'))

function alunosMath(obj) {
  let tot = 0;
  const key = Object.keys(obj)
  for (i in key) {
    if (obj[key[i]].materia === 'Matemática') {
      tot += obj[key[i]].numeroEstudantes;
    }
  }
  return tot;
}
console.log(alunosMath(junto))
