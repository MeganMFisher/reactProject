import React, { Component } from 'react';
import router from './router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { router }
        <Footer />
      </div>
    );
  }
}

export default App;
