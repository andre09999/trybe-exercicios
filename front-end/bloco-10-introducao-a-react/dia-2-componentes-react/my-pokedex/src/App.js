import React from 'react'
import Render from './Render'

class App extends React.Component {
  render() {
    return (
      <main className='principal'>
        <h1 className='titulo'>Pokedex</h1>
        <div className='card'><Render /></div>
       
        </main>
    );
  }
}
export default App;
