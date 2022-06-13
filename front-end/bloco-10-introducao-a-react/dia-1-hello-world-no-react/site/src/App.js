import './App.css';
import Cabe from './header';
import React from 'react';
import Main from './main'
import Footer from './footer'
class App extends React.Component {
  render() {
    return (
      <div>
        <Cabe />
        <Main />
        <Footer />
        </div>
    )
  }

}

export default App;
