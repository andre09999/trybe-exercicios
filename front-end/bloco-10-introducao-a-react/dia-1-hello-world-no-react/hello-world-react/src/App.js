import React from "react";

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const tarefas = ['acordar', 'tomar cafe', 'ir para faculdade','voltar para casa','almoçar']

class App extends React.Component {
  render() {
    return (
      <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
    );
 }
}

export default App;
