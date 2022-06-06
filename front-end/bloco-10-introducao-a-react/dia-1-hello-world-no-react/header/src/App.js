import React from 'react';
import './App.css';
import Header from './Header';
import Content from './content';
import Footer from './Footer'
class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
}
}

export default App;
