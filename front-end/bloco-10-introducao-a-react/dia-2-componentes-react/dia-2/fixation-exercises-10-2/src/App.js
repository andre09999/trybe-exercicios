// arquivo App.js, criado pelo create-react-app, modificado
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];

    const items = shoppingList.map((order,index) => (
      <li key={index}>{ order}</li>
 
    ));
    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

export default App;
