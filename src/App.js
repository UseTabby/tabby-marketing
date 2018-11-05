import React, { Component } from 'react';
import './App.css';

// Import Components
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
